//counting sheep in an array, for null or undefined return false

let arr = [true, null, true, true, 1, false, true, true, false, true];

function countSheep (array) {
    array = [...array];
    let count = 0;

    array.forEach( el => {
        if (el)  {
            count += 1;
        }
    })
    return count;
}

const fn = arr => arr.reduce((prev, curr) => {
    if (curr) return prev + 1;

    return prev;
} ,0)

const fn2 = arr => arr.reduce((prev, curr) => curr && typeof curr === "boolean" ? prev + 1 : prev ,0)

console.log(countSheep(arr));
console.log(fn2(arr));