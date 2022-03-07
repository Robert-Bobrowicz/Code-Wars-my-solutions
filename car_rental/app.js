
function carRental(days) {
    if (days >= 3 && days < 7) return (days * 40) - 20;
    if (days >= 7) return (days * 40) - 50;
    return  days * 40;
}

console.log(carRental(7));
console.log(carRental(4));
console.log(carRental(2));