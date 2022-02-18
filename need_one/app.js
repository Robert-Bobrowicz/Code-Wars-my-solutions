// given an array check if ti includes x
function needOne(array, x) {
    return array.includes(x);
}

console.log(needOne([1, 2, 3], 2));
console.log(needOne([1, 2, 3], 0));