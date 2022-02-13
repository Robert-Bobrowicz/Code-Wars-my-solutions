//Tribonacci sequence = sum of three previous elements creates fourth one and so on

function tribonacciSequence (signature, n) {
    let arr = [...signature];
    let fourEl = 0;

    if (n !== 0 && n > 2 && n >= arr.length) {
        for (let i = signature.length; i < n; i++) {
            fourEl = arr.slice(arr.length - 3, arr.length).reduce((a,b) => a +b);
            arr.push(fourEl);
        }
        return arr;
    }

    if (n === 0) return [];
    if ( n === 1) return arr.slice(0,1);
    if ( n === 2) return arr.slice(0,2);
}

console.log(tribonacciSequence([0,0,1], 10));
console.log(tribonacciSequence([0,1,1], 10));
console.log(tribonacciSequence([1,1,1], 10));
console.log(tribonacciSequence([1,1,1], 20));
console.log(tribonacciSequence([1,1,1], 0));
console.log(tribonacciSequence([1,1,1], 1));


//inne rozwiązanie z Code Wars
function tribonacci(signature,n) {
    const result = signature.slice(0, n);
    while (result.length < n) {
        result[result.length] = result.slice(-3).reduce((p,c) => p + c, 0);
    }
    return result;
}

console.log(tribonacciSequence([0,0,1], 10));
console.log(tribonacciSequence([0,1,1], 10));
console.log(tribonacciSequence([1,1,1], 10));
console.log(tribonacciSequence([1,1,1], 20));
console.log(tribonacciSequence([1,1,1], 0));
console.log(tribonacciSequence([1,1,1], 1));
console.log(tribonacciSequence([1,1,1], 2));