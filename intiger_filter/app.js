
function filterInteger (array) {
    let result = [];
    array.filter(el => {
        if (el === 0 || Number.isInteger(el)) {result.push(el)};
    })
    return result;
}

console.log(filterInteger([1, 2, 0, 'abx']));

//inne rozwiązanie z code wars
function filter_list(l) {
    return l.filter(v => typeof v == "number")
}
console.log(filter_list([1, 2, 0, 'abx']));