//returns true if string ends with a given substring

function stringEnds (string, ending) {

    let stringEndsChars = string.slice(-ending.length);
    if (ending === '') return true;
    if (stringEndsChars === ending) return true;

    return false;
}

console.log(stringEnds('abcdef', 'ef'));
console.log(stringEnds('abcdef', 'ff'));


//inne rozwiązania z Code Wars

function solution(str, ending){
    return str.endsWith(ending);
}

console.log(solution('abcdef', 'ef'));
console.log(solution('abcdef', 'ff'));


//