//returns sum of squared elements of a given array

function squareSum (array) {
    let sum = 0;
    array.map(el => {
        sum += Math.pow(el, 2);
    })
    return sum;
}

console.log(squareSum([2, 2, 2]));
console.log(squareSum([1, 1, 1]));
console.log(squareSum([1, 2, 3]));
console.log(squareSum([1, 2, 3, 4, 5]));