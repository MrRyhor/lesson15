class MultiChecker {
    constructor(initNum) {
        this.checkedNum = initNum
        this.answersTrue = 0
        this.answersFalse = 0
    }
    getRandomNum(min = 1, max = 10) {
        return min + Math.floor(Math.random() * (max - min + 1))
    }

    getMultOperation() {
        for (let i = 0; i < 11; i++) {
            let firstNum = this.checkedNum
            let secondNum = this.getRandomNum()
            let userAnswers = parseInt(prompt(`${firstNum} * ${secondNum} = ?`))
            if (userAnswers === firstNum * secondNum) this.answersTrue += 1
            else this.answersFalse += 1
        }
        return `${this.answersTrue} and ${this.answersFalse}`
    }

    toString() {
        return `<p>Checked Num = ${this.checkedNum}<br> Answers True = ${this.answersTrue}<br> Answers False = ${this.answersFalse}</p>`
    }
}

let res = new MultiChecker(3)
res.getMultOperation()
document.write(res)
console.log(res)