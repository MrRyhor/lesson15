function ShootingRange(cellsLength, qntHare) {
    this.shootingRangeLength = this.getShootingField(cellsLength, qntHare)
}

ShootingRange.prototype.getRandomNum = function (minVal, maxVal) {
    return minVal + Math.floor(Math.random() * (maxVal - minVal + 1))
}

ShootingRange.prototype.getRandomIndex = function (cellsLength) {
    let randomIndex = this.getRandomNum(0, cellsLength - 1)
    return randomIndex
}

ShootingRange.prototype.getShootingField = function (cellsLength, qntHare) {
    let shootingField = new Array(cellsLength).fill(0)
    for (let i = 0; i < qntHare; i++) {
        let harePosition = this.getRandomIndex(cellsLength)
        if (shootingField[harePosition] !== 1) shootingField[harePosition] = 1
    }
    return shootingField
}

ShootingRange.prototype.getUserGame = function (qntShoot) {
    // игра тир
    for (let i = 0; i < this.shootingRangeLength.length, qntShoot > 0; i++) {
        let userShoot = parseInt(prompt('Введите номер клетки куда стреляете:'))
        if (this.shootingRangeLength[userShoot] === 1){
            alert('Вы убили зайца')
            break
        }else {
            qntShoot--
            alert(`Вы промазали. Осталось ${qntShoot} выстрелов`)
        }
    }
    // выводим игровое поле
   document.write('<table border=1>')
    for (let i = 0; i < this.shootingRangeLength.length; i++) {
        if (this.shootingRangeLength[i] === 1)
            document.write(`<td><p><span>${this.shootingRangeLength[i]}</span></p></td >`)
        else
            document.write(`<td><p> X </p></td >`)
    }
    document.write('</table>')
}

let shootingRange = new ShootingRange(10, 1)
console.log(shootingRange) // для теста

shootingRange.getUserGame(5)


