// Tutorial 6 : Inheritance, Encapsulation and Polymorphism


// Task 3: Polymorphism

// Drawing any of Shapes involves creating horizontal and vertical offsets based on the x and y values
// create a method in the Shape class a method called createHorizontalOffset that takes an offset and return
// a string with empty spaces that equals to the offset,
// if the offset was undefined then the value of x will be used as the offset
// create a draw method in that prints empty lines equal to the y coordinate

// in the square class override the draw method so that it would call the darw method inherited from the parent
// to print empty lines equal to the value of y
// then call the createHorizontalOffset with empty argument to get empty spaces equal to the value of x
// then create the actual square using *'s (similar to Tutorial1)


// in the triangle class override the draw method so that it would call the draw method inherited from  the parent
// create the triangle using *'s (similar to Tutorial1, just replace the value of triangleOffset by the value of x).
// while creating the triangle the methond createHorizontalOffset will be called with different offset values depending

class Shape {
    constructor(newX, newY) {
        let __x__;
        let __y__;

        this.setX = function (x) {
            __x__ = (x >= 0) ? x : 0;
        };
        this.getX = function () {
            return __x__;
        };

        this.setY = function (y) {
            __y__ = (y >= 0) ? y : 0;
        };
        this.getY = function () {
            return __y__;
        };

        this.setX(newX);
        this.setY(newY);
    }

    showPoint() {
        console.log(this.getX() + "," + this.getY())
    }

    createHorizontalOffset(offset) {
        if (offset === undefined)
            offset = this.getX();
        let emptySpace = "";
        for (let i = 0; i < offset; i++) {
            emptySpace += " ";
        }
        return emptySpace;
    }

    draw() {
        for (let i = 0; i < this.getY(); i++)
            console.log();
    }

// TASK 1
    displayInfo() {
        return "Shape with main points: " + this.getX() + ", " + this.getY();
    }
};

class Square extends Shape {
    constructor(x, y, newLength) {
        super(x, y);

        var __length__;

        this.setLength = function (length) {
            __length__ = (length > 0) ? length : 1;
        };
        this.getLength = function () {
            return __length__;
        };

        this.setLength(newLength);
    }

    draw() {
        super.draw();
        let offset = this.createHorizontalOffset();
        let square = "";
        for (let i = 0; i < this.getLength(); i++) {
            let line = "\n" + offset;
            for (let j = 0; j < this.getLength(); j++)
                line += "*";

            square += line;
        }

        console.log(square);
    }

//TASK 1
    displayInfo() {
        return "Square" + super.displayInfo();
    }

};


class Triangle extends Shape {
    constructor(x, y, newHeight) {
        super(x, y);

        var __height__;

        this.setHeight = function (height) {
            __height__ = (height > 0) ? height : 1;
        };
        this.getHeight = function () {
            return __height__;
        };

        this.setHeight(newHeight);
    }

    draw() {
        super.draw();
        let triangle = "";
        for (let i = 0; i < this.getHeight(); i++) {
            let line = "\n" + this.createHorizontalOffset(this.getX() - i);

            for (let j = 0; j < ((i * 2) + 1); j++)
                line += "*";

            triangle += line;
        }
        console.log(triangle);
    }

// TASK 1
    displayInfo() {
        return "Triangle" + super.displayInfo();
    }

}

//Task 2
// Plain Objects is an array of objects
let plainObjects = [
    {x: 5, y: 6},
    {type: 'Square', x: 7, y: 10, length: 10},
    {x: 8, y: 9, type: 'Triangle', height: 50},
];

let transformPlainObjectsToShapes = function (data) { // passing the array of objects to this function
    let shapes = [];
    let s;
    // iterate through the array to get the shapes
    for (let d of data) {
        switch (d.type) {
            case undefined:
                s = new Shape(d.x, d.y);
                break;

            case 'Square':
                s = new Square(d.x, d.y, d.length);
                break;

            case 'Triangle':
                s = new Triangle(d.x, d.y, d.height);
                break;

        }

        // after each iteration we will push the shape "s" into the list shapes
        shapes.push(s);

    }

    return shapes;
};

let results = transformPlainObjectsToShapes(plainObjects);

for (let s of results) {
    console.log(s.displayInfo())

}

// let s = new Shape(5, 10);
// s.draw();
// console.log("===================");
//
// let sq = new Square(10, 20, 30);
// sq.draw();
//
// let t = new Triangle(20, 30, 20);
// t.draw();
console.log("--------------------------------------");
//Task 3
// use the high order function .map()

results = plainObjects.map(object => (object.type === undefined) ?
    new Shape(object.x, object.y) :
    (object.type === 'Square') ? new Square(object.x, object.y, object.length) :
        new Triangle(object.x, object.y, object.height));

for (let s of results){
    console.log(s.displayInfo());
}