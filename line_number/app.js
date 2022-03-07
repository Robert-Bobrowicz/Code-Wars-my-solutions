
function lineNumber (array) {
   return array.map ((el, index) => `${index + 1}: ${el}`);
}

console.log(lineNumber(['a', 'b', 'c']));