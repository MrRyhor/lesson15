class Array {
    constructor(link, src) {
        this.link = link
        this.src = src
    }
}
class Baner {
    constructor(arrImages) {
        this.images = arrImages
    }
    getRandomImage(min, max) {
        return min + Math.floor(Math.random() * (max - min + 1))
    }
    getRenderResult() {
        let result = this.getRandomImage(0, this.images.length - 1)
        document.write(`<a href = '${this.images[result].link}' target ='_blank'><img src = '${this.images[result].src}'></a>`)
    }
}

let images = [
    new Array(link = 'https://www.google.com', src = 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg'),
    new Array(link = 'https://www.youtube.com', src = 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg'),
    new Array(link = 'https://www.facebook.com', src = 'https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_960_720.jpg')
]

console.log(images)

let result = new Baner(images)
console.log(result)
result.getRenderResult()

