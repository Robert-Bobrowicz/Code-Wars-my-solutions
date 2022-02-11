//string jest isogram jeśli litery nie powtarzają się (bez względu na wielkość), pusty tring to też isogram

let string1 = 'abcdefABCDEF';
let string2 = '1234567890';
let string3 = '121212';
let string4 = 'abcdabcd';
let string5 = 'moOse';
let string6 = '';

function isogramCheck (string) {
    let str = string.toUpperCase();
    for(let i = 0; i < string.length; i++) {
        for (let j = 0; j < string.length; j++) {
            if (str[j] === str[i] && i !== j) {
                console.log('not isogram');
                return;
            }
        }
    }
    console.log('isogram');
}

isogramCheck(string1);
isogramCheck(string2);
isogramCheck(string3);
isogramCheck(string4);
isogramCheck(string5);
isogramCheck(string6);


//inne rozwiązanie z Code Wars
function isIsogram(str) {
    return !/(\w).*\1/i.test(str);
}

console.log(isIsogram(string1));
console.log(isIsogram(string2));
console.log(isIsogram(string3));
console.log(isIsogram(string4));
console.log(isIsogram(string5));
console.log(isIsogram(string6));