// square every digit in string and concat results

function squareDigitAndConcat (number) {
    let arr = [...number.toString()];
    arr = arr.map(el => Math.pow(el, 2)).join();
    arr = arr.replace(/,/g, '');
    return parseInt(arr);
}

console.log(squareDigitAndConcat(234));
console.log(squareDigitAndConcat(9119));