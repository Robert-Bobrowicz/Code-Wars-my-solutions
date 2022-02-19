//Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
//
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.

function likeIt (array) {
    if (array.length === 0) return "no one likes it";
    if (array.length === 1) return `${array[0]} likes it`;
    if (array.length === 2) return `${array[0]} and ${array[1]} like it`;
    if (array.length === 3) return `${array[0]}, ${array[1]} and ${array[2]} like it`;
    if (array.length > 3) {
        let splicedArr = array.splice(0, 2);  //first two elements of array, rest is in array variable :)
        return `${splicedArr[0]} and ${splicedArr[1]} and ${array.length} others like it`;
    }
}

console.log(likeIt(['Peter', 'Kasia', 'Ola', 'Jon', 'Szymon', 'Karolina']));
console.log(likeIt([]));
console.log(likeIt(['Alexa']));
console.log(likeIt(['Alexa', 'Bobby']));
console.log(likeIt(['Alexa', 'Bobby', 'Kasia']));
