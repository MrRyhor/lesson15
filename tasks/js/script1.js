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
        else i--
    }
    return shootingField
}

ShootingRange.prototype.getUserGame = function (qntShoot, qntHare) {
    for (let i = 0; i < qntShoot; i++) {
        if (qntHare === 0)
            break
        let userShoot = parseInt(prompt('Введите номер клетки куда стреляете:'))
        if (this.shootingRangeLength[userShoot] === 1) {
            qntHare--
            alert(`Вы убили зайца. Осталось ${qntHare} зайцев`)
        } else {
            alert(`Вы промазали`)
        }
    }    
}

ShootingRange.prototype.getResultOfGame = function () {
    document.write('<table border=1>')
    for (let i = 0; i < this.shootingRangeLength.length; i++) {
        if (this.shootingRangeLength[i] === 1)
            document.write(`<td><p><span>${this.shootingRangeLength[i]}</span></p></td >`)
        else
            document.write(`<td><p> X </p></td >`)
    }
    document.write('</table>')
}

let shootingRange = new ShootingRange(12, 3)
console.log(shootingRange) // для теста

shootingRange.getUserGame(7, 3)
shootingRange.getResultOfGame()


