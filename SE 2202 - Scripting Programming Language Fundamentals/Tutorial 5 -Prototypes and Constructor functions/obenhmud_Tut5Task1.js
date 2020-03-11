// prototype contains real and img part of the complex #
let prototype = {

    real: 0,
    img: 0,
    print: function () {
        console.log(this.real + " + " + this.img + "i");
    }
};

// function returning with template that contains both img, and real numbers
function prototypeFunction(r, i) {
    let complex = Object.create(prototype);
    complex.real = r;
    complex.img = i;
    return complex;
}

let compObject = prototypeFunction(5, 9);
compObject.print();

// simple constructor function
function constructorFunction(r, i) {
    this.real = r;
    this.img = i;
    this.print = function () {
        console.log(this.real + " + " + this.img + "i")
    };
    this.add = function (){

    };
    this.sub = function (){

    };
    this.mult = function (){

    };
    this.div = function (){

    };

}

let newObject = new constructorFunction(2, 9);
newObject.print();
