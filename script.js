const container = document.querySelector('.container')
const X = "X"
const O = "O"

const GameBoard = (() => {
    let gameOver = false
    let gameArr = [[" ", " ", " "],[" ", " ", " "],[" ", " ", " "]]
     return {
        gameArr
     };
   })();
 
//player turn state should be on game board function
//game should be checked to see if its over after every move 
//

const Player = (name) => {
    let isXTurn = true
    const makeMove = (e) => {
        const id = e.srcElement.id.slice(2, e.srcElement.id.length)
        console.log(id)
        const box = document.getElementById(`b-${id}`)
        if (isXTurn) {
            box.textContent = X }
        else {
            box.textContent = O }
        
        isXTurn = false;
    }
    return {makeMove};
  };  


const emma = Player('emma')


function addGrid() {
for (let i = 0; i < GameBoard.gameArr.length; i ++) {
    let row = document.createElement("div"); 
        row.className = "row";
        container.appendChild(row);
        
    for (let j=0; j < GameBoard.gameArr[i].length; j++) { 
        let box = document.createElement("div");
        box.className = "box";
        box.setAttribute('id', `b-[${i}][${j}]`)
        box.textContent = GameBoard.gameArr[i][j]
        if (GameBoard.gameArr[i][j] == " ") {
            box.addEventListener('click', (e) => emma.makeMove(e)) }
        row.appendChild(box);
    }
}
}

document.addEventListener('DOMContentLoaded', addGrid() ) 

//create a box div for each space on the game board array, each one with an event listener and an i/j value 

//players take it in turn to make a move, a boolean denotes whether it is players turn which can be set to false
//after a move is made
//every move a player can take will have an i/j value and this can be pushed to game array
