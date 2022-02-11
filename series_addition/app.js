// returns sum of series equal to 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 + ... + 1/(1 + 3*N)

function seriesN (n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += 1/(1 + 3 * i);
    }
    return sum.toFixed( 2);
}

console.log(seriesN(1));
console.log(seriesN(2));
console.log(seriesN(5));
