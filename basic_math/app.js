
function basicMath(oper, a, b) {
    switch(oper) {
        case '+' :
            return a + b;
        case '-' :
            return a -b;
        case '*' :
            return a * b;
        case '/' :
            return a / b;
    }
}

console.log(basicMath('+', 2,2));
console.log(basicMath('-', 2,2));
console.log(basicMath('*', 2,2));
console.log(basicMath('/', 2,2));
