//counting sheep in an array, for null or undefined return false

let arr = [true, null, true, true, false, true, true, false, true];

function countSheep (array) {
    array = [...array];
    let count = 0;

    array.forEach( el => {
        if (el === null || el === undefined)  {
            el = false;
        }
        if (el === true) {
            count += 1;
        }
    })
    return count;
}

console.log(countSheep(arr));