//summation - suma liczb całkowitych od 1 do num , np. dla n = 3 => 1+2+3 = 6;

const sum = function (number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum = sum + i;
    }
    return sum;
}

console.log(sum(2));
console.log(sum(8));
