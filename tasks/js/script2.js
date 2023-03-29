function Auto(initModel, initVolume, initLiters, initPlaces, initPassengers) {
    this.model = initModel
    this.volume = initVolume
    this.liters = this.getFueling(initLiters)
    this.places = initPlaces
    this.passengers = this.getPassengers(initPassengers)
}

Auto.prototype.getFueling = function (initLiters) {
    let countLiters = 0
    if (initLiters > this.volume) countLiters = initLiters
    else countLiters += initLiters
    return countLiters
}

Auto.prototype.toString = function () {
    return `${this.passengers}`
}

Auto.prototype.getPassengers = function (initPassengers) {
    let countPassengers = 0
    if (initPassengers > this.places) countPassengers = initPassengers
    else countPassengers += initPassengers
    return countPassengers
}

Auto.prototype.getDropOfPassengers = function (qntOfPassengers) {
    this.passengers -= qntOfPassengers
    if (this.passengers < 0) this.passengers = 0
    return this.passengers
}

let auto1 = new Auto('Iveco', 60, 60, 45, 31)
let auto2 = new Auto('Fiat', 40, 40, 18, 12)
let auto3 = new Auto('Renault', 50, 50, 23, 16)

console.log(auto1)
console.log(auto2)
console.log(auto3)

auto1.getDropOfPassengers(12)

console.log(`Кол-во пассажиров Auto2 = ${auto2.toString()}`)
console.log(`Кол-во пассажиров Auto1 = ${auto1.toString()}`)

result1.innerHTML = '<span>см. в консоль</span>'