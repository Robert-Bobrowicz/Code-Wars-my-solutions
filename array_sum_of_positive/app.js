// returns sum of positive numbers from an array
let array = [1,2,-2, 2, 0, 2, -100];

function sumOfPositive (array) {
    let arr = [...array];
    let sum = 0;
    arr.forEach(el => {
        if (el >= 0) {
            sum += el;
        }
    })
    return sum;
}

const fn = arr => arr
    .filter(number => number > 0)
    .reduce((prev, curr) => prev + curr)

console.log(sumOfPositive(array));
console.log(fn(array));