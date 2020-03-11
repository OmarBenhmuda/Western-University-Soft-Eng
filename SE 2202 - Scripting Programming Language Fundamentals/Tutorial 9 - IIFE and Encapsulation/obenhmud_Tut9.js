//Task 1
console.log("____________________________");
console.log("TASK 1");
(function () {
    let grades = [90, 67, 55, 87, 92];
    let average = function () { // Generates the average of the grades using a for-loop
        let sum = 0;
        for (let i = 0; i < grades.length; i++) {
            sum += grades[i];
        }
        return sum / grades.length;
    };

    let maxGrade = function () { // Calculate the max grade from the grades array using the .reduce() method
        return grades.reduce((a, b) => (a > b) ? a : b);
    };

    console.log("Average: " + average());
    console.log("MaxGrade: " + maxGrade());

})();
console.log("____________________________");

//TASK 2
console.log("TASK 2");
let gradesObj = ((function () {
    let grades = [90, 67, 55, 87, 92];

    let average = function () { // sGenerates the average of the grades using a for-loop
        let sum = 0;
        for (let i = 0; i < grades.length; i++) {
            sum += grades[i];
        }
        return sum / grades.length;
    };

    let maxGrade = function () {
        return grades.reduce((a, b) => (a > b) ? a : b);
    };

    return { // Same as previous task, however, return statement is added so we can refer to average()
        // and maxGrade() from outside the IIFE
        average: average(),
        maxGrade: maxGrade()
    }
})());

console.log("Average: " + gradesObj.average);
console.log("MaxGrade: " + gradesObj.maxGrade);
console.log("____________________________");


//TASK 3
console.log("TASK 3");

let mutatorGradesObj = ((function () {  // Same function as previous task however getter and setter functions
    // have been implemented in order to be able to change the grades
    let grades = [90, 67, 55, 87, 92];

    let average = function () { // sGenerates the average of the grades using a for-loop
        let sum = 0;
        for (let i = 0; i < grades.length; i++) {
            sum += grades[i];
        }
        return sum / grades.length;
    };

    let maxGrade = function () {
        return grades.reduce((a, b) => (a > b) ? a : b);
    };
    let setGrades = function (newGrades) { // grades can be changed to a new array of grades
        grades = newGrades;
    };

    let getGrades = function () { // here the current grades set are called
        return grades;
    };
    return { // returns the functions that can be used outside of the IIFE, but now setGrades and getGrades are added
        // so that they can be called outside as well
        average,
        maxGrade,
        setGrades,
        getGrades

    }
})());

console.log("Grades before new Grades have been set: " + "[" + mutatorGradesObj.getGrades() + "]"); //current grades called
console.log("Average: " + mutatorGradesObj.average()); // old grades calculated average (same as task 2)
console.log("MaxGrade: " + mutatorGradesObj.maxGrade()); // old grades calculated maxGrade (same as task 2)


mutatorGradesObj.setGrades([22, 34, 40, 10, 16]);
console.log("\nGrades after new Grades have been set: " + "[" + mutatorGradesObj.getGrades() + "]"); // new grades called
console.log("Average: " + mutatorGradesObj.average()); // new grades calculated average
console.log("MaxGrade: " + mutatorGradesObj.maxGrade()); // new grades calculated max grade

console.log("____________________________");