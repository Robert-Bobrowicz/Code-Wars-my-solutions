
function century (year) {
    return year % 100 === 0? Math.floor(year / 100) : Math.floor(year / 100 + 1) ;
}

console.log(century(1922));
console.log(century(2022));
console.log(century(1900));
console.log(century(450));

//inne rozwiązanie z code wars
function century1(year) {
    return Math.ceil(year/100); //using ceiling method to round up to nearest century (100)
}

console.log(century1(1922));
console.log(century1(2022));
console.log(century1(1900));
console.log(century1(450));