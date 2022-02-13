// return letter from a string in its position in alhabet

function alphabetPosition(text) {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let string = text.toLowerCase();
    let arr = [...string];
    let indexOfLetter = [];

    for (let i = 0; i < arr.length; i++) {
        if (alphabet.includes(arr[i])) {
            alphabet.findIndex((el, index) => {
                if (el === string[i])
                    indexOfLetter.push(index + 1);
            });
        }
    }
    return indexOfLetter.join().replace(/,/g, ' ');
}

console.log(alphabetPosition('Abcd'));
console.log(alphabetPosition('The sunset'));

// inne rozwiązanie z Code Wars
function alphabetPosition(text) {
    return text
        .toUpperCase()
        .match(/[a-z]/gi)
        .map( (c) => c.charCodeAt() - 64)
        .join(' ');
}

console.log(alphabetPosition('Abcd'));
console.log(alphabetPosition('The sunset'));