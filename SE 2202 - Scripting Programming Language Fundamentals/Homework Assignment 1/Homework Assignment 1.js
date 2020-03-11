//Edward Chang
//Darryl Lee
//Danielle Caira Dizon

let months = []; //array in arrays 12 months in a year

months[0] = [
    {name: "item1", amount: 500}, {name: "item2", amount: 400}, {name: "item3", amount: 100}, {name: "item4", amount: -200}, {name: "item5", amount: -100}
];
months[1] = [
    {name: "item6", amount: 200}, {name: "item7", amount: 800}, {name: "item8", amount: -300}, {name: "item9", amount: -200}, {name: "item10", amount: -100}
];
months[2] = [
    {name: "item11", amount: 400}, {name: "item12", amount: 600}, {name: "item13", amount: -100}, {name: "item14", amount: -400}, {name: "item15", amount: -100}
];
months[3] = [
    {name: "item16", amount: 200}, {name: "item17", amount: 700}, {name: "item18", amount: 100}, {name: "item19", amount: -300}, {name: "item20", amount: -400}
];
months[4] = [
    {name: "item21", amount: 300}, {name: "item22", amount: 500}, {name: "item23", amount: 200}, {name: "item24", amount: -400}, {name: "item25", amount: -100}
];
months[5] = [
    {name: "item26", amount: 700}, {name: "item27", amount: 250}, {name: "item28", amount: 50}, {name: "item29", amount: -400}, {name: "item30", amount: -200}
];
months[6] = [
    {name: "item31", amount: 150}, {name: "item32", amount: 400}, {name: "item33", amount: 350}, {name: "item34", amount: 100}, {name: "item35", amount: -500}
];
months[7] = [
    {name: "item36", amount: 100}, {name: "item37", amount: 550}, {name: "item38", amount: 250}, {name: "item39", amount: 100}, {name: "item40", amount: -460}
];
months[8] = [
    {name: "item41", amount: 550}, {name: "item42", amount: 450}, {name: "item43", amount: -500}, {name: "item44", amount: -300}, {name: "item45", amount: -350}
];
months[9] = [
    {name: "item46", amount: 200}, {name: "item47", amount: 200}, {name: "item48", amount: 600}, {name: "item49", amount: -550}, {name: "item50", amount: -600}
];
months[10] = [
    {name: "item51", amount: 450}, {name: "item52", amount: 250}, {name: "item53", amount: 300}, {name: "item54", amount: -450}, {name: "item55", amount: -600}
];
months[11] = [
    {name: "item56", amount: 150}, {name: "item57", amount: 400}, {name: "item58", amount: 450}, {name: "item59", amount: -800}, {name: "item60", amount: -300}
];

//input income and expense

function validMonthFunction(budgetItem){
    //sees whether it's income or expense
    let validMonth = [];
    for(let i = 0; i < budgetItem.length; i++){

        let totalAmount = 0;
        for(let j = 0; j < budgetItem[i].length; j++){
            totalAmount = totalAmount + budgetItem[i][j].amount;
        }

        if (totalAmount > 0){
            validMonth[i] = true;
        }
        else{
            validMonth[i] = false;
        }

    }
    return validMonth;
}
let validOriginal = validMonthFunction(months);

/*for(let i=0; i<validOriginal.length; i++){
    console.log("Month " + i + " is " + validOriginal[i]);
}*/

function makeMonthValid(budgetItem) {
    let x = [];
    let k = 0;
    for (let i = 0; i < validOriginal.length; i++) {
        if (validOriginal[i] == false) {
            for (let j = budgetItem[i].length; j > 0; j--) {
                if(budgetItem[i][j - 1].amount < 0){
                    //console.log(budgetItem[i].splice(j-1));
                    x[k] = budgetItem[i].splice(j - 1);
                    k++;
                }
            }
        }
    }
    return x;
}
let leftoverExpense = makeMonthValid(months);

for(let i=0; i < leftoverExpense.length; i++){
    console.log("name: " + leftoverExpense[i][0].name + " amount: " + leftoverExpense[i][0].amount);
}

function insertLeftovers(budgetItem, leftovers){
    let temp;
    for(let i = 0; i < validOriginal.length; i++){

        let totalAmount = 0;
        for(let j = 0; j < budgetItem[i].length; j++){
            totalAmount = totalAmount + budgetItem[i][j].amount;
        }

        for(let k = leftovers.length - 1; k > 0; k--) {

            if (totalAmount + leftovers[k][0].amount > 0) {
                budgetItem[i].push(leftovers[k].shift());
                temp = leftovers.splice(k);
                break;
            }
        }
    }
    return budgetItem
}

let rearranged = insertLeftovers(months, leftoverExpense);

console.log("\n");
console.log("----- REARRANGING -----");
console.log("\n");

for(let i = 0; i < rearranged.length; i++){
    let s = "";
    let a = 0;
    for(let j = 0; j < rearranged[i].length; j++) {
        s += rearranged[i][j].name + " ";
        a += rearranged[i][j].amount;
    }

    console.log("The new total income and expense items for month " + i + " is: " + s);
    console.log("The new total amount for month " + i + " is: " + a);

}