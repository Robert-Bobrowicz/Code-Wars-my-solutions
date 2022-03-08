
function mathModulo (a, b) {
    return a % b;
}

function floorNumber (number) {
    return number - (number % 1); //Floor(x)=f(x)=x−(x mod 1)
}

function ceilNumber (number) {
    if (Number.isInteger(number)) return number;
    return number + (1 - (number % 1)); //Ceil(x)=f(x)=x+(1−(x mod 1))
}

function roundNumber (number) {
    return floorNumber(number + (number % 1) );
}

console.log(mathModulo(6,1));
// console.log(mathModulo(6,2));
// console.log(mathModulo(6,3));
console.log(mathModulo(6,4));
// console.log(mathModulo(6,5));
console.log(mathModulo(6,6));
// console.log(mathModulo(6,7));
// console.log(mathModulo(6,8));
// console.log(mathModulo(6,9));
console.log(mathModulo(6,10));

console.log(floorNumber(1.1), ceilNumber(1.1), roundNumber(1.1));
console.log(floorNumber(1.2), ceilNumber(1.2), roundNumber(1.2));
console.log(floorNumber(1.5), ceilNumber(1.5), roundNumber(1.5));
console.log(floorNumber(1.9), ceilNumber(1.9), roundNumber(1.9));
console.log(floorNumber(2.2), ceilNumber(2.2), roundNumber(2.2));
console.log(floorNumber(2.4), ceilNumber(2.4), roundNumber(2.4));
console.log(floorNumber(2.5), ceilNumber(2.5), roundNumber(2.5));
console.log(floorNumber(2.9), ceilNumber(2.9), roundNumber(2.9));
console.log(floorNumber(0), ceilNumber(0), roundNumber(0));
console.log(floorNumber(5), ceilNumber(5), roundNumber(5));

