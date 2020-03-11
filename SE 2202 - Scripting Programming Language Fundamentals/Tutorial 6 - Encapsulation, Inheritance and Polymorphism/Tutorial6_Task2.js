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

class Square extends Shape
{
    constructor(x,y,newLength)
    {
        super(x,y);

        var __length__;

        this.setLength = function (length)
        {
            __length__ = (length > 0)? length : 1;
        };
        this.getLength();
        {
            return __length__;
        };

        this.setLength(newLength);
    }

}

// Similarly create a Triangle class that extends the Shape class with the special proprty that holds the hight of the triangle

class Triangle extends Shape
{
    constructor(x,y,newHeight)
    {
        super(x,y);

        var __height__;

        this.setHeight = function (height)
        {
            __height__ = (height > 0)? height : 1;
        };
        this.getHeight()
        {
            return __height__;
        };

        this.setLength(newHeight);
    }

};