
function pumpStation (distance, gallons) {
    return gallons * 25 >= distance ? true : false;
}

console.log(pumpStation(50, 2));
console.log(pumpStation(100, 2));
console.log(pumpStation(25, 2));