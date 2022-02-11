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

console.log(sumOfPositive(array));