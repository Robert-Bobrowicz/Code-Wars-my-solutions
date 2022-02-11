// dla zadanej tablicy zer i jedynek w kodzie dwójkowym oblicz wartość (liczbę całkowitą)

function powerOfTwo (array) {
    let res = 0;
    array.reverse();
    for (let i = 0;  i < array.length; i++) {
        if (array[i] === 1) {
            res = res + Math.pow(2, i);
        }
    }
    return res;
}

console.log(powerOfTwo([1,0,0,1]));
console.log(powerOfTwo([1,0,0,0]));
console.log(powerOfTwo([0,1,0,0]));
console.log(powerOfTwo([0,0,1,0]));
console.log(powerOfTwo([0,0,0,1]));
console.log(powerOfTwo([1,1,1,1,1,1,1,1]));


//inne rozwiązania z Code Wars
const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);

console.log(binaryArrayToNumber([1,1,1,1]));


//lub
const binaryArrayToNumber1 = arr => {
    return arr.reduce((total, cur) => (total = total * 2 + cur), 0);
}

console.log(binaryArrayToNumber1([1,1,1,1]));