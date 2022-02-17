//example of simple currying function

function outer() {
    const string = 'outer function starts here'
    console.log(string);
    //inner();

    return function inner () {
        console.log('inner function has access to variables of outer function');
        console.log(string.replace('outer', 'inner and outer').replace('starts', 'ends'));
    }
}

outer();

//with arguments

function outer1(arg1) {
    return function inner(arg2) {
        let sum = arg1 + arg2;
        return `sum of ${arg1} + ${arg2} = ` + sum;
    }
}

console.log(outer1(2)(2));


//partially curried function
const sumArg3 = outer1(3);

console.log(sumArg3(3));
console.log(sumArg3(1));