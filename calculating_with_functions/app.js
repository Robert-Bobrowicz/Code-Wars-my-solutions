// This time we want to write calculations using functions and get the results. Let's have a look at some examples:
//
// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:
//
// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
//
// function zero() {
// }
// function one() {}
// function two() {}
// function three() {}
// function four() {}
// function five() {}
// function six() {}
// function seven() {}
// function eight() {}
// function nine() {}
//
// function plus() {}
// function minus() {}
// function times() {}
// function dividedBy() {}
//
// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(seven(times(five())), 35);
// Test.assertEquals(four(plus(nine())), 13);
// Test.assertEquals(eight(minus(three())), 5);
// Test.assertEquals(six(dividedBy(two())), 3);
//   });
// });

function zero(fn) {
    return fn ? fn(0) : 0;
}

function one(fn) {
    return fn ? fn(1) : 1;
}

function two(fn) {
    return fn? fn(2) : 2;
}

function three(fn) {
    return fn ? fn(3) : 3;
}

function four(fn) {
    return fn ? fn(4) : 4;
}

function five(fn) {
    return fn ? fn(5) : 5;
}

function six(fn) {
    return fn ? fn(6) : 6;
}

function seven(fn) {
    return fn ? fn(7) : 7;
}

function eight(fn) {
    return fn ? fn(8) : 8;
}

function nine(fn) {
    return fn ? fn(9) : 9;
}

function plus( arg ) {
    return a => a + arg;
}

function minus( arg ) {
    return a => a - arg;
}

function times( arg ) {
    return a => a * arg;
}

function dividedBy( arg ) {
    return a => Math.floor(a / arg);
}


console.log(one(dividedBy(two())));
console.log(seven(times(five())));
console.log(four(plus(nine())));
console.log(eight(minus(three())));
console.log(six(dividedBy(two())));
console.log(six(dividedBy(eight())));