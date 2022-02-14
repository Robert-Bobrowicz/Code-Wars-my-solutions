// findNextSquare method that finds the next integral perfect square after the one passed as a parameter.
// Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
//
// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

function findNextSquare (number) {
    let res = Math.sqrt(number);
    let nextSquare = 0;

    if (Number.isInteger(res)) {
        res += 1;
        return nextSquare = Math.pow(res, 2);
    }
    return -1;
}

console.log(findNextSquare(121));
console.log(findNextSquare(625));
console.log(findNextSquare(114));


//inne rozwiązanie z Code Wars
function findNextSquare1(sq) {
    return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
}

console.log(findNextSquare1(121));
console.log(findNextSquare1(625));
console.log(findNextSquare1(114));