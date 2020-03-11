/* const drawSquare = function (squareOffset, length) {

    const createOffset = function(offset){
      let space = "";
      for (var i = 1; i<= offset; i++){
         space ++;
      }
        return space;
    };
    let square = "";
    let offset = createOffset(squareOffset);
    for  (var i = 1; i <= length; i++) {
        line = "\n" + offset;
        for(var j = 1; j <= length; j++){
            line += "+";
        }
        square += line;
    }
  return square
};

console.log(drawSquare(0,5));
const offsetMaker = function (offLen) {
    let space = "";
    for(var x = offLen; x <= offLen; x--);
    {
        space = space + "  ";
    }
    return space;
    };

const triangleMaker = function (offset,  length) {
    let freeSpace = offsetMaker(offset --);
    let tri = "";
    for (var y = 0; y <length; y++){
        for (var z=0; z<((y*2)+1); z++{
            tri += " * ";
        }
    }
    return tri;
};

console.log(triangleMaker(10,10 )); */
const drawTriangle = function (base){
    let tri = "";
    for (var i =1; i <= base; i++){
            console.log(tri);
            tri += "*";
    }
    return tri;
};
console.log(drawTriangle(5));