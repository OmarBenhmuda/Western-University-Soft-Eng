let printVertical = function (toBePrinted) {
  for (let i = 0; i< toBePrinted.length; i++){
      console.log(toBePrinted.charAt(i));
  }

};

let printWithSpace = function (toBePrinted) {
    let result = "";
    for (let i = 0; i< toBePrinted.length; i++){
        result = result + toBePrinted.charAt(i) + " ";
    }
    console.log(result);

};

let printInReverse = function (toBePrinted) {
    for (let i = toBePrinted.length; i>=0; i--){
        console.log(toBePrinted.charAt(i));

}
    };
printVertical("ananda");
printInReverse("hello guys");
printWithSpace("this is se2202 course");

let genericPrinter = function (stringToBePrinted, printingFunction) {
    printingFunction(stringToBePrinted);

};

genericPrinter("Hello everybody", printInReverse);
genericPrinter("Hello everybody", printWithSpace);
genericPrinter("Hello everybody", printVertical);
