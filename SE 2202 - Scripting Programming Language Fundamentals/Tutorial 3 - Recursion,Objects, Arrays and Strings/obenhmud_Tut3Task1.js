// TASK 1

let binaryCalcLoop = function (number) {
    let binary = "";
    let remainder = 0;
    do {                    //using a do-while loop to easily keep track of the remainder and number
        remainder = number % 2;
        number = ~~(number/2); // make sure to round down so the remainders will always be 1 or 0
        binary = remainder.toString() + binary.toString();  // converting numbers to strings so the values themselves dont add together
    } while (number > 0);
    return binary;
};

let binaryCalcRecur = function (number) {
  let binary = "";
  if (number === 0 ){
    binary = ""; // making sure to not include 0
  }
  else {
      binary = binaryCalcRecur(~~(number/2)) + (number % 2); // calling the function inside the function
                                                            // also setting the binary number each time the function calls itself
  }
  return binary;
};

for (let i = 1; i <= 20; i++) {
    console.log("The decimal " + i + " converted to binary -->  Loop Function: " + binaryCalcLoop(i)
        + " ||| Recursion Function: " + binaryCalcRecur(i));
}
