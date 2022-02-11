//DNA complementary letters A na T, T na A, C na G, G na C

function complementaryLettersDNA (string) {
    console.log(string);
    let str = [...string];
    if (str === []) return '';

    for (let i = 0; i < str.length; i++) {

        if (str[i] === 'A') {
            str[i] = 'T';
        }
        else if (str[i] === 'T') {
            str[i] = 'A';
        }
        else if (str[i] === 'C') {
            str[i] = 'G';
        }
        else if (str[i] === 'G') {
            str[i] = 'C';
        }
    }

    return str.join('').toString();
}

console.log(complementaryLettersDNA('AAAA'));
console.log(complementaryLettersDNA('TTTT'));
console.log(complementaryLettersDNA('CCCC'));
console.log(complementaryLettersDNA('GGGG'));
console.log(complementaryLettersDNA('GAGA'));
console.log(complementaryLettersDNA('ACAC'));
