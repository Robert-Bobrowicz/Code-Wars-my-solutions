//The goal of this exercise is to convert a string to a new string where each character in the new string
// is "(" if that character appears only once in the original string, or ")" if that character appears more than
// once in the original string. Ignore capitalization when determining if a character is a duplicate.
//
// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

function duplicateEncoder (string) {
    let stringCharArray = string.toLowerCase().split('');
    let filArr = [];
    console.log(stringCharArray);

    return stringCharArray
        .map((el) => {
            filArr = stringCharArray.filter((char) => char === el);
            return filArr.length > 1 ? ")" : "(";
        })
        .join("");

    // stringCharArray.forEach(el => {
    //     filArr = stringCharArray.filter( char => char === el);
    //
    //     filArr.length > 1 ? string = string.replace(/el/g, ')') : string = string.replace(/[a-z]/g, '('); // tu nie wiem jak wstawić zmienną ${el} do regex
    // })

    // return string;
}

console.log(duplicateEncoder('abcDA'));
console.log(duplicateEncoder('aabbcc'));
console.log(duplicateEncoder('abccdd'));
console.log(duplicateEncoder('dddd'));
console.log(duplicateEncoder('ffff'));
console.log(duplicateEncoder('frfafwfd'));


//inne rozwiązanie c COde Wars
function duplicateEncode(word) {
    word = word.toLowerCase();
    return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
}

console.log(duplicateEncode('abcDA'));
console.log(duplicateEncode('aabbcc'));
console.log(duplicateEncode('abccdd'));
console.log(duplicateEncode('dddd'));
console.log(duplicateEncode('ffff'));
console.log(duplicateEncode('frfafwfd'));


// lub
function duplicateEncode(word){
    return word
        .toLowerCase()
        .split('')
        .map( function (a, i, w) {
            return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
        })
        .join('');
}