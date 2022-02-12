// return number remaining in a bus

function peopleInBus (array) {
    let inBus = 0;
    let outBus = 0;
    array.forEach(el => {
        console.log(el);
        inBus += el[0];
        outBus += el[1];
    })

    console.log(inBus, outBus);
    return inBus - outBus;
}

console.log(peopleInBus([[10,0],
[3,5],
[5,8]
]));

