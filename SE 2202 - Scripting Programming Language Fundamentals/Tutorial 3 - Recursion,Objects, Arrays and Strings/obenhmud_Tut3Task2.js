//TASK 2

let parseObject = function (jsonString){
    let resultObject = [];
    if ((jsonString.charAt(0) != "{") && (jsonString.charAt(jsonString.length -1) != "}"))
    {
        console.log("Object is not well formatted");
        return null;
    }
    let allProperties = jsonString.slice(1, jsonString.length - 1);

    console.log(allProperties);

    let splittedProperties = allProperties.split(",");

    console.log(splittedProperties);
    for(let property of splittedProperties){
        console.log(property);
    }

    for (let property of splittedProperties)    {
        let splittedIndex = property.indexOf(":");
        // passed (x:5, y:6, etc)
        let propertyName = (property.slice(0, splittedIndex)).trim(); //trim mmethod is used to remove the white space
        let propertyValue  = (property.slice(splittedIndex-1, property.length)).trim();
        resultObject[propertyName] = propertyValue;

        console.log("property Name is: " + propertyName + "-- property value is: " + propertyValue);

        if(propertyName in resultObject){
            console.log("property name from inside the result object is: " + propertyName);
        }
    }
    return resultObject

};

let string1 = parseObject("{x:5, y:6, z:7}");

console.log("property value x of string1 is: " + string1.x);
console.log("property value y of string1 is: " + string1.y);
console.log("property value z of string1 is: " + string1.z);