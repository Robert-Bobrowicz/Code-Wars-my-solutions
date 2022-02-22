//replace digit >= 5 to 1 and to 0 for digits < 5

function fakeBin(x){
    let arr = [...x];
    let result = arr.map(el => {
        if (el >= 5) return el = 1;
        return el = 0;
    })

    return result.toString().replace(/,/g , '');
}

console.log(fakeBin('123456789'));

//inne rozwiązania z Code Wars
function fakeBin1(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}

console.log(fakeBin1('123456789'));


//lub
function fakeBin2(x) {
    return x.replace(/\d/g, d => d < 5 ? 0 : 1);
}

console.log(fakeBin2('123456789'));