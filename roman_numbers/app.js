//convert arabic year into roman string
function romanDate(date) {
    const arabicNumbers = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const romanDates = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let result = '';

    arabicNumbers.map( (arabic, index) => {
        while (date >= arabic) {
            result += romanDates[index];
            date -= arabic;
        }
    });

    return result;
}

console.log(romanDate(1000));
console.log(romanDate(1));
console.log(romanDate(2022));
console.log(romanDate(900));
console.log(romanDate(1410));
console.log(romanDate(1918));
console.log(romanDate(1944));


//inne rozwiązanie z code wars
function solution(number){
    // convert the number to a roman numeral
    var  roman = {M:1000,CM:900, D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1 }

    var ans = '';
    while(number>0){
        for(a in roman){
            if(roman[a]<=number){ ans += a; number-=roman[a]; break;}

        }
    }
    return ans;
}

console.log(solution(1000));
console.log(solution(1));
console.log(solution(2022));
console.log(solution(900));
console.log(solution(1410));
console.log(solution(1918));
console.log(solution(1944));