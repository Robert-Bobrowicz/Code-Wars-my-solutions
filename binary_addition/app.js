// add two numbers and convert sum to binary representation

function binaryAddition (a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return (a + b).toString(2);
    } else return null;
}

let num = 9;
console.log((binaryAddition(0,1)));
console.log((binaryAddition(1,1)));
console.log((binaryAddition(2,1)));
console.log((binaryAddition(3,1)));
console.log((binaryAddition(10,1)));
console.log((binaryAddition("10",1)));
console.log(num.toString(2));