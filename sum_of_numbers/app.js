// Given two integers a and b, which can be positive or negative, find the sum of all the integers between
// and including them and return it. If the two numbers are equal return a or b.

function sumOfNumbers(a, b) {
    let sum = 0;
    if (a > b) {
        let c = a;
        a = b;
        b = c;
        console.log( a, b);
    }

    if (a !== b && a < b) {
        for (let i = a; i <= b; i++) {
            sum += i;
        }
        return sum;
    }
    return a;
}

console.log(sumOfNumbers(3, 1));
console.log(sumOfNumbers(0, 1));
console.log(sumOfNumbers(-1, 0));
console.log(sumOfNumbers(-1, -1));
console.log(sumOfNumbers(-1, -10));
console.log(sumOfNumbers(1, 10));
console.log(sumOfNumbers(-10, 10));




//inne rozwiązanie z Code Wars
const GetSum = (a, b) => {
    let min = Math.min(a, b),
        max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
}

console.log(GetSum(3, 1));
console.log(GetSum(0, 1));
console.log(GetSum(-1, 0));
console.log(GetSum(-1, -1));
console.log(GetSum(-1, -10));
console.log(GetSum(1, 10));
console.log(GetSum(-10, 10));