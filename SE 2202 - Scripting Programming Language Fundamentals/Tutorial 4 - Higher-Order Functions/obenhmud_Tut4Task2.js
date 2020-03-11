// we have an array that contains multiple objects
// we need to filter/exclude the points that has the x value or the y value  equal to zero
// each object represents a point in the plain
let points = [{x: 5, y: 6}, {x: 3, y: 7}, {x: 8, y: 0}, {x: 9, y: 10}, {x: 15, y: 4}, {x: 0, y: 15}];

// we want to find the points that are not on any of the axis
let findPointOffAxis = function (point) {
    return ((point.x !== 0) && (point.y !== 0));
};

// we want to store the points that are not on any of the axis in an array
let pointsOffAxis = points.filter(findPointOffAxis);
console.log("Filtered points: ");
console.log(pointsOffAxis);
console.log('\n');

/////
/////


// we want to calculate the distances of the filtered points from the origin
// we will use the euclidean distance
// formula is square root ( (x2-x1)^2 + (y2-y1)^2 )
let findDist = function (point) {
    return (Math.sqrt((Math.pow(point.x, 2)) + (Math.pow(point.y, 2))));

};

let dist = pointsOffAxis.map(findDist);
console.log("Distance from the origin: ");
console.log(dist);
console.log('\n');
////
/////


let findMaxDist = function (distance1, distance2) {
    return (distance1 > distance2) ? distance1 : distance2;
};

let maxDist = dist.reduce(findMaxDist);
console.log("Max distance is: ");
console.log(maxDist);
console.log('\n');

//////////////
/////////////

let maxDistArrowMethod = points
    .filter(point => (point.x !== 0) && (point.y !== 0))
    .map(point => Math.sqrt((Math.pow(point.x, 2)) + (Math.pow(point.y, 2))))
    .reduce((distance1, distance2) => (distance1 > distance2) ? distance1 : distance2);

console.log("The max distance returned from arrow notation: ");
console.log(maxDistArrowMethod);