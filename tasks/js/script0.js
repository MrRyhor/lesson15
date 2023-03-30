let obj1 = {
    numbers: [2, 7, 21, 12, 34, 56, 11, 9, 45, 13, 28, 12, 1, 3],
    getSum: function () {
        return this.numbers.reduce((prevSum, element) => prevSum + element)
    }    
}

let obj2 = {
    numbers: [21, 14, 2, 20, 3, 67, 1, 12, 11, 32, 6, 30, 8, 10],
    getMult: function (min, max) {
        return this.numbers.reduce((prevMult, element) => element >= min && element <= max ? prevMult * element : prevMult, 1)
    }
}

document.write(`<p>Sum of Obj1 = ${obj1.getSum(7, 28)}</p>`)
document.write(`<p>Mult of Obj2 = ${obj2.getMult(6, 14)}</p>`)

document.write(`<p>Sum of Obj2 = ${obj1.getSum.call(obj2, 2, 14)}</p>`)
document.write(`<p>Mult of obj1 = ${obj2.getMult.apply(obj1, [2, 12])}</p>`)

