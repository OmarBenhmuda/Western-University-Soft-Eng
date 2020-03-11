let printHello = function (name){
    let staticString = "Hello ";
    console.log(staticString+" "+ name);
};
let printGretting = printHello;
printHello ("ananda!");
printGretting("John!");