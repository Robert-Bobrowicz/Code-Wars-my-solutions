
function add(a, b) {
    for (let i = 1; i <= b; i++) {
        a++;
    }
    return a;
}

console.log(add(2,2));
console.log(add(2,8));
console.log(add(-2,2));

//using no +

function addNoPlus(a, b) {
    while (b !== 0)
    {
        // carry now contains common
        //set bits of x and y
        let carry = a & b;

        // Sum of bits of x and y where at
        //least one of the bits is not set
        a = a ^ b;

        // Carry is shifted by one so that adding
        // it to x gives the required sum
        b = carry << 1;
    }
    return a;
}

console.log(addNoPlus(2,2));
console.log(addNoPlus(2,8));
console.log(addNoPlus(-2,2));
