let color = "black"
let click = false;

function populateBoard(size) {
    let board = document.querySelector('.board')
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`

    let amount = size * size

    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div')
        square.addEventListener('mouseover', colorSquare)
        square.style.backgroundColor = 'blue'
        board.insertAdjacentElement("beforeend", square);
    }

}

populateBoard(16)

function changeSize(input) {
    populateBoard(input)
}

function colorSquare() {
    if (click) {
        if (color === 'random') {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
        }
        this.style.backgroundColor = color;


    }
}

function changeColor(choice) {
    color = choice;
}

function resetBoard() {
    let board = document.querySelector('.board')
    let squares = board.querySelectorAll("div")
    squares.forEach((div) => div.style.backgroundColor = "blue")
}

document.querySelector('body').addEventListener("click", ()=>{
    click = !click
})
