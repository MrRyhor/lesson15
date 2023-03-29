class DanceChef {
    constructor (arrMens, arrWomens) {
        this.mens = arrMens
        this.womens = arrWomens
    }
    getRandomNum(min, max){
        return min + Math.floor(Math.random() * (max - min + 1))
    }
    getRandomMen() {
        let randomIndex = this.getRandomNum(0, this.mens.length - 1)
        return this.mens[randomIndex]
    }
    getRandomWomen() {
        let randomIndex = this.getRandomNum(0, this.womens.length - 1)
        return this.womens[randomIndex]
    }
    getCoupleToDance(){
        let men = this.getRandomMen()
        let women = this.getRandomWomen()
        return `${men} dance with ${women}`
    }
    run() {
        let result = this.getCoupleToDance.bind(this)
        setInterval(function(){
            alert(result())
        }, 5000)
    }
}

let arrMens = ['John', 'Jake', 'Peter', 'Denis', 'Tom', 'Will']
let arrWomens = ['Kate', 'Jenifer', 'Julia', 'Sandra', 'Natali', 'Kim']

let danceList = new DanceChef(arrMens, arrWomens)
console.log(danceList)
danceList.run()



