//bmi calculation

function bmi(weight, height) {
    let bmi = weight / Math.pow(height, 2);
    if (bmi <= 18.5) return 'Underweight';
    if (bmi <= 25) return 'Normal';
    if (bmi <= 30) return 'Overweight';
    return 'Obese';
}

console.log(bmi(80, 1.84));