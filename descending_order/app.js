// 12345 => 54321

function descendingOrder (integer) {
    let arr = Array.from(String(integer));
    arr.sort((a, b) => {return b - a});

    return parseInt(arr.join(''));
}

console.log(descendingOrder(12345));
console.log(descendingOrder(14397323467));
console.log(descendingOrder(0));
console.log(descendingOrder(10));
console.log(descendingOrder(1010));