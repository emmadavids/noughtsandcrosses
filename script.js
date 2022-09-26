const container = document.querySelector('.container')
const X = "X"
const O = "O"

const GameBoard = (() => {
    let isXTurn = true
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
    
    const makeMove = (e) => {
        const id = e.srcElement.id.slice(2, e.srcElement.id.length)
        const box = document.getElementById(`b-${id}`)
        const i = id.slice(1, 2)
        const d = id.slice(4, 5)
        if (GameBoard.isXTurn) {
            GameBoard.gameArr[i][d] = X
            box.textContent = X 
            GameBoard.isXTurn = false;
        }
        else {
            GameBoard.gameArr[i][d] = O
            box.textContent = O 
            GameBoard.isXTurn = true; 
            console.log(GameBoard.gameArr)
        }

        
       
    }
    return {makeMove};
  };  

function checkWin () {

}

const emma = Player('emma')


function addGrid() {
for (let i = 0; i < GameBoard.gameArr.length; i ++) {
    let row = document.createElement("div"); 
        row.className = "row";
        container.appendChild(row);
        
    for (let j=0; j < GameBoard.gameArr[i].length; j++) { 
        const box = document.createElement("div");
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


