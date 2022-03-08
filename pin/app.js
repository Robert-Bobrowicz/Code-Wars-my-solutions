
function pinVerify(string) {
    return /^(\d{4}|\d{6})$/.test(string);
}

console.log(pinVerify('1234'));
console.log(pinVerify('123456'));
console.log(pinVerify('12345'));
console.log(pinVerify('1234ab'));


//inne rozwiązanie
function validatePIN (pin) {
    let pinlen = pin.length;
    let isCorrectLength = (pinlen === 4 || pinlen === 6);
    let hasOnlyNumbers = pin.match(/^\d+$/); //inny regex

    if (isCorrectLength && hasOnlyNumbers) return true;
    return false;
}

console.log(validatePIN('1234'));
console.log(validatePIN('123456'));
console.log(validatePIN('12345'));
console.log(validatePIN('1234ab'));