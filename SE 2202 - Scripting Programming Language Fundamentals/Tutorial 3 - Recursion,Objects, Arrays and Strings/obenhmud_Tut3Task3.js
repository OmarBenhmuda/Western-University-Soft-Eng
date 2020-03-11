// TASK 3

let findList = function (threshold, ...lists){
    //threshold is a numeric value
    // ...lists is an array of arrays
    // we need two loops
    // the first loop to go through the lists/arrays in the outer array
    // second loop is to go through the elements of each array
    for(list of lists){
        // list is an arraylists (1st, 2nd, 3rd array and so an

        for (let element of list){
            let pass = false; // the flag that will tell the loop to jump to the next array
            if(element < threshold){
                // in order to jump to 2nd array
                // if any of the elements of the array
                pass = true;
                break;
            }
            if(!pass){
                return list;
            }
        }
    }



};

let list1 = [2,4,6,7];
let list2 = [15,20,25,30];
let list3 = [34,5,65];

let foundList = findList(10,list1,list2,list3);
console.log(foundList); // will return the array with the brackets
console.log(...foundList); // will just return the values in the array