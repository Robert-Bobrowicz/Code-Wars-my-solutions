//Given an array of integers, remove the smallest value

function removeSmallest (array) {

    let arrayOfIndexes = [];
    let smallestElement = Math.min(...array);
    let index = array.indexOf(smallestElement);
    while (index !== -1) {
        arrayOfIndexes.push(index);
        index = array.indexOf(smallestElement, index + 1);
    }

    return array.filter ((el, ind) => ind !== arrayOfIndexes[0])
}

console.log(removeSmallest([2, 2, 1, 2, 1]));
console.log(removeSmallest([0, 2, -10, -10, 3, 4, 5, -1, -1]));
console.log(removeSmallest([1,2,3,4,5,1]));

//inne rozwiązanie z code wars
function removeSmallest1(numbers) {
    const min = Math.min.apply(this, numbers);
    return numbers.filter((num, idx, arr) => idx !== arr.indexOf(min));
}

console.log(removeSmallest1([2, 2, 1, 2, 1]));
console.log(removeSmallest1([0, 2, -10, -10, 3, 4, 5, -1, -1]));
console.log(removeSmallest1([1,2,3,4,5,1]));