//Make a program that filters a list of strings and returns a list with only your friends name in it.
//
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
//
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

function foe (array) {
    let arr = [...array];
    let result = [];

    arr.forEach(el => {
        if (el.length === 4) return result.push(el);
    })

    return result;
}

console.log(foe(["Ryan", "Kieran", "Jason", "Yous"]));



// inne rozwiązanie
function foe1(array){
    return array.filter(el => el.length === 4)
}

console.log(foe1(["Ryan", "Kieran", "Jason", "Yous"]));