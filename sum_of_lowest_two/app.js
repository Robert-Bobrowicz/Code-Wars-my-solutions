// return sum of two lowest positive numbers form a given array

function sumOfTwoLowest (array) {
    return array.sort((a,b) => a -b).slice(0,2).reduce((prev, curr) => prev + curr);
}

console.log(sumOfTwoLowest([4,3,2,1]));
console.log(sumOfTwoLowest([10,3,2,30,4]));
console.log(sumOfTwoLowest([10,3,2,30,4]));