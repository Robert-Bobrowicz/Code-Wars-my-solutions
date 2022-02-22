// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
//
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
//
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

const a = "xxxyyyyzzzz"
const b = "aabbcccdd"

function longestPossible (a, b) {
    let string = a + b;
    let arr = string.split('');
    let result = arr.filter((el, index) => {return arr.indexOf(el) === index});
    return result.sort().join('');
}

console.log(longestPossible(a, b));


//inne rozwiązania z code wars
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('');
console.log(longest(a, b));

//lub
function longest2(s1, s2) {
    return Array.from(new Set(s1 + s2)).sort().join('');
}
console.log(longest2(a, b));


