// x^2 :::: power factor is 2::::: base is x:::::
let powerOf = function (powerFactor){
    let raiseToPower = function (base){
        let result = 1;
        for (let i = 0; i<powerFactor; i++){
            result = result * base;

        }
        return result;
    };

    return raiseToPower;
};

let powerOfTwo = powerOf(2);
console.log(powerOfTwo(5));

let powerOfThree = powerOf(3);
console.log(powerOfThree(5));
let powerOfFour = powerOf(4);
console.log(powerOfFour(5));