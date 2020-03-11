// Tutorial 6 : Inheritance, Encapsulation and Polymorphism

// Task1 - Shape class with private properties
// In general all computer based shapes are defined based on an essential point,
// for example, if the shape is a circle then the center would be the essential point
// if the shape is a rectangle, then the top-left corner is the essential point.
// we would like to define the x and y coordinates in a generic Shape class that would be
// the parent of all other shapes that we allow in the system
// we want to allow only positive values to be used for the coordinates, so in order to avoid setting -ve values
// by mistake we would like to have both x and y defined as private members
// that can only be set after the value was checked, if the value sent to the setter was negative,
// the coordinate will be set to 0;
// the coordinates can also be sent as arguments to the constructor, which is capable of setting the private variables
// directly, however, in order to make sure the proper check is performed before setting the values the constructor
// will call the setter functions instead.
// The Shape class also defines a function called showPoint that prints the coordinates separated by a comma

class Shape
{
    constructor(newX,newY)
    {
        let __x__;
        let __y__;

        this.setX = function (x){
            __x__ = (x>=0)?x:0;
        };
        this.getX = function() {
            return __x__;
        };

        this.setY = function (y){
            __y__ = (y>=0)?y:0;
        };
        this.getY = function() {
            return __y__;
        };

        this.setX(newX);
        this.setY(newY);
    }
    showPoint()
    {
        console.log(this.getX() + "," + this.getY())
    }
};
//If you want to navigate through the prototype property of the Shape, you can
console.log(Shape.prototype);

// try creating a Shape object and call the showPoint
let s = new Shape(5,6);
s.showPoint();

//try re-setting the coordinates using the setter methods
s.setX(3);
s.setY(2);
//try printing the coordinates by calling the getter methods
console.log(s.getX() +" , " + s.getY());

// try to print the private properties directly to see what happens (it'll print undefined)
console.log(s.__x__);

