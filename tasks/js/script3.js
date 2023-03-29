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
        let firstNum = this.checkedNum
        let secondNum = this.getRandomNum()
        let userAnswers = parseInt(prompt(`${firstNum} * ${secondNum} = ?`))
        if (userAnswers === firstNum * secondNum) return true
        else return false
    }

    getChecked() {
        if (this.getMultOperation() === true) return this.answersTrue += 1
        else return this.answersFalse += 1
    }

    toString() {
        return document.write(`<p>Checked Num = ${this.checkedNum}<br> Answers True = ${this.answersTrue}<br> Answers False = ${this.answersFalse}</p>`)
    }
}

let res = new MultiChecker(3)
res.getChecked()
res.toString()
console.log(res)