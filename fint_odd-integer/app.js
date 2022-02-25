//Given an array of integers, find the one that appears an odd number of times.
//
// There will always be only one integer that appears an odd number of times.
//
// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function finOdd(array) {
    let oddInt = 0;
    array.forEach(el => {
        let oddArr = array.filter(char => char === el);
        if (oddArr.length % 2 !== 0) {
            oddInt = oddArr[0];
        }
    })
    return oddInt;
}

console.log(finOdd([1]));
console.log(finOdd([1,2,2,2,1,1,1]));
console.log(finOdd([]));
console.log(finOdd([4,4,4,4,4]));
console.log(finOdd([ 20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5 ]));

//inne rozwiązanie z code wars
const findOdd1 = (xs) => xs.reduce((a, b) => a ^ b);

console.log(findOdd1([1]));
console.log(findOdd1([1,2,2,2,1,1,1]));
//console.log(findOdd1([])); //tu dla pustej tab wyrzuca błąd
console.log(findOdd1([4,4,4,4,4]));
console.log(findOdd1([ 20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5 ]));