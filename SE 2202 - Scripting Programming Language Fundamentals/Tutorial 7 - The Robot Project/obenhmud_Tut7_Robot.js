const roads = [ //This is where all the names of the roads are declared to be used for later
    "Alice's House-Bob's House", "Alice's House-Cabin",
    "Alice's House-Post Office", "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop", "Marketplace-Farm",
    "Marketplace-Post Office", "Marketplace-Shop",
    "Marketplace-Town Hall", "Shop-Town Hall"
];

function buildGraph(edges) { //creates a map object that, for each node, stores an array of connected nodes
    let graph = Object.create(null);

    function addEdge(from, to) {
        if (graph[from] == null) { // if not coming from anything
            graph[from] = [to];     // sets the from -> to
        } else {
            graph[from].push(to); //otherwise it will push the destination beside the leaving point
        }
    }
    for (let [from, to] of edges.map(r => r.split("-"))) { // in const roads, the leaving point and the destination are
        addEdge(from, to);                                 // separated by a "-". The .split() method is used to split
        addEdge(to, from);                                 // the leaving point and destination into 2 elements in order
    }                                                      // to put them into a 2 element array to be used for later
    return graph;
}

const roadGraph = buildGraph(roads); // uses the build graph function to build the graph using the road names
                                    // initialized at the beginning

class VillageState {
    constructor(place, parcels) { // constructs where the robot and the parcel(s) it must deliver
        this.place = place;
        this.parcels = parcels;
    }

    move(destination) {
        if (!roadGraph[this.place].includes(destination)) { // checks if there is a road that goes from the leaving place
            return this;                                    // to the destination. If not, stay put.
        } else {
            let parcels = this.parcels.map(p => {       // parcels also need to be moved to destination
                if (p.place != this.place) return p;   //  map is called to move around
                return {
                    place: destination,
                    address: p.address
                };
            }).filter(p => p.place != p.address); //filter is called to deliver the parcels after they have
            return new VillageState(destination, parcels); //been created (see line 41)
        }
    }
}

let first = new VillageState( // initializes the first state
    "Post Office",
    [{
        place: "Post Office", // the parcel is at the post office
        address: "Alice's House" // the parcel needs to be delivered to this adress
    }]
);
let next = first.move("Alice's House"); // delivering parcel

console.log(next.place);
// → Alice's House
console.log(next.parcels);
// → []
console.log(first.place);
// → Post Office

// The Robot
function runRobot(state, robot, memory) {
    for (let turn = 0;; turn++) {
        if (state.parcels.length == 0) { // tracks whether or not the parcels been delivered
            console.log(`Done in ${turn} turns`); // if they have then it displays the number of turns taken and breaks
            break;                                // the loop for the program
        }
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
        console.log(`Moved to ${action.direction}`);
    }
}

function randomPick(array) { // chooses a random direction every turn, eventually will reach parcel and will
                            // //eventually deliver it to the right place
    let choice = Math.floor(Math.random() * array.length); // Math.random gives a number >0 and <1
                                                              // which means it can be multiplied by the arrays length
                                                              // to give a position in the array
    return array[choice];
}
// Random Robot

function randomRobot(state) {  // starts up the random robot with the parameters we initialised earlier
    return {direction: randomPick(roadGraph[state.place])};
}

VillageState.random = function (parcelCount = 5) {
    let parcels = [];
    for (let i = 0; i < parcelCount; i++) {
        let address = randomPick(Object.keys(roadGraph));
        let place;
        do { // this loop is used so that the parcel isn't made in the same place as its delivery location
            place = randomPick(Object.keys(roadGraph));
        } while (place == address);
        parcels.push({
            place,
            address
        });
    }
    return new VillageState("Post Office", parcels);
};


// THE MAIL TRUCK ROUTE
const mailRoute = [ // This is a route that runs through all houses in the village
    "Alice's House", "Cabin", "Alice's House", "Bob's House",
    "Town Hall", "Daria's House", "Ernie's House",
    "Grete's House", "Shop", "Grete's House", "Farm",
    "Marketplace", "Post Office"
];

// Route Robot
function routeRobot(state, memory) { // this time the memory will need to be utilized
    if (memory.length == 0) {
        memory = mailRoute; // this allows the robots memory to be = to the mailroute so that it can access the house names
    }
    return {direction: memory[0], memory: memory.slice(1)};
}

function findRoute(graph, from, to) { // This function begins to create routes that will grow from where the starting
                                     // point is, iterating through all places that have not been visited yet.
    let work = [{at: from, route: []}];  // <-- This is a list of places that still need exploring
    for (let i = 0; i < work.length; i++) { // using this loop the different routes are looked at, if one of them is the
                                             // the goal, then that route is taken
        let {at, route} = work[i];
        for (let place of graph[at]) {
            if (place == to) return route.concat(place);
            if (!work.some(w => w.at == place)) {
                work.push({at: place, route: route.concat(place)});
            }
        }
    }
}
// Goal Oriented Robot

function goalOrientedRobot({place, parcels}, route) { // this function is used when the robot has a parcel
    if (route.length == 0) {                          // It needs to find the location where the parcel needs to be delivered
        let parcel = parcels[0];
        if (parcel.place != place) { // If the parcel has not been picked up, it finds a route for that that place
            route = findRoute(roadGraph, place, parcel.place);
        } else {                    // if the parcel HAS been picked up it now finds a route for the delivery address
            route = findRoute(roadGraph, place, parcel.address);
        }
    }
    return {direction: route[0], memory: route.slice(1)};
}

// Running the application

runRobot(VillageState.random(), goalOrientedRobot, []);
// → Moved to Marketplace
// → Moved to Town Hall
// → …
// → Done in 63 turns