let limitFunction = function (num) {
    return ((num >= 5) && (num <= 20));
};

let dist = [134, 6, 7, 83, 9, 1, 0, 9, 6, 17, 54, 16];
// filtering the elements from the array that are between 5 and 20
// done by using the .filter() method
let limitValues = dist.filter(limitFunction);
console.log("The elements that are in limit values: ");
console.log(limitValues);

// using arrow notation
// filtered values will be an array that carries all the numbers that are within range
let filteredValues = dist.filter(num => ((num >= 5) && (num <= 20)));
console.log("The elements that are in filtered values: ");
console.log(filteredValues);
console.log('\n');

/////////////////
/////////////////

let transformToInches = function (num) {
    return num * 39.37;

};

// .map() method will run a callback on each element of the array
// callback is when passing a function as an argument to another function
// need to store the transformed numbers in another array
// the transformToInches will be applied to the array that has the filtered values
let transformedToInches = limitValues.map(transformToInches);
console.log(transformedToInches);

let transformedToInches2 = limitValues.map(num => (num * 39.37));
console.log("Using the arrow notation: ");
console.log(transformedToInches2);

/////////////
////////////

console.log('\n');
console.log("finding min value...");
let findMinValue = function (a, b) {
    return (a < b) ? a : b; // if a is less than b return a, otherwise return b
};

// the findMinValue function will start by holding a as current value
// it will compare it to the next value in the array
// if b is less than a, the new current will be b, and it will compare it to the next element in the array
// we will use the .reduce() to find the min amongst the numbers
let min = transformedToInches.reduce(findMinValue);
console.log(min);

let min2 = dist
    .filter(num => ((num >= 5) && (num <= 20)))
    .map(num => (num * 39.37))
    .reduce((a, b) => (a < b) ? a : b);
console.log("finding min value using arrow notation...");
console.log(min2);