//reverse words

function reverseWords (string) {
    let str = string.split(' ');
    let result = [];

    str.map( word => {
        let el = [...word].reverse().join().replace(/,/g, '');
        result.push(el);
    })
    return result.toString().replace(/,/g, ' ');
}

console.log(reverseWords('mama is the most beautiful in the world'));
console.log(reverseWords('this is a string to test function'));

//inne rozwiązaie z Code Wars
function reverseWords1(str) {
    // Go for it
    //split words into separate arrays
    return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

console.log(reverseWords1('mama is the most beautiful in the world'));
console.log(reverseWords1('this is a string to test function'));