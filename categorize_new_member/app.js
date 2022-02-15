//The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.
//
// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
//
// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
//
// Output
// Output will consist of a list of string values (in Haskell: Open or Senior) stating whether the respective member is to be placed in the senior or open category.
//
// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

function categoryOfMember (array) {
    let output = [];
    array.map( el => {
        el[0] >= 55 && el[1] > 7? output.push("Senior") : output.push("Open");
    })
    return output;
}

console.log(categoryOfMember([ [24, 2], [45, 17], [65,8], [78, 12] ] )); // Open Open Senior Senior
console.log(categoryOfMember([ [18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9] ] )); // "Open", "Open", "Senior", "Open", "Open", "Senior"
console.log(categoryOfMember([ [45, 12],[55,21],[19, -2],[104, 20] ] )); // 'Open', 'Senior', 'Open', 'Senior'




//podobne rozwiązanie z Code Wars
function openOrSenior(data){
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}

console.log(openOrSenior([ [24, 2], [45, 17], [65,8], [78, 12] ] )); // Open Open Senior Senior
console.log(openOrSenior([ [18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9] ] )); // "Open", "Open", "Senior", "Open", "Open", "Senior"
console.log(openOrSenior([ [45, 12],[55,21],[19, -2],[104, 20] ] )); // 'Open', 'Senior', 'Open', 'Senior'
