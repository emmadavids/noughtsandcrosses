const container = document.querySelector('.container')
let X = "X"
let O = "O"
const player1 = prompt("Please enter player one's name")
const player2 = prompt("Please enter player two's name")
const GameBoard = (() => {
    let isXTurn = true
    let gameOver = false

    const pickTurn = () => {
        let player 
        if (GameBoard.isXTurn == true) {
            player = X;
            GameBoard.isXTurn = false;
    }
    else {
        player = O;
        GameBoard.isXTurn = true;
    } return player }

    let gameArr = [[" ", " ", " "],[" ", " ", " "],[" ", " ", " "]]

    const checkWinner = (piece) => {
        for (let i = 0; i < gameArr.length; i ++) {
         let cond = gameArr[i].every((element) => element === piece) 

                console.log("condy: " + cond)
                    // console.log(element + ": wins") //check horizontal
                    // every((x) => x === 2))
        
        } 
     
        
    }



    const checkGameOver = () => {
     
        if (gameArr[0].includes(" ") == false && gameArr[1].includes(" ") == false && gameArr[2].includes(" ") == false ) {
            gameOver = true }
            console.log(gameOver)
        }
    
     return {
        gameArr, pickTurn, checkGameOver, checkWinner
     };
   
   })();

//player turn state should be on game board function
//game should be checked to see if its over after every move 
//

const Player = (name, piece) => {

    const getPiece = () => piece;

    const getName = () => name;

    const makeMove = (e) =>  {
        const id = e.srcElement.id.slice(2, e.srcElement.id.length)
        const box = document.getElementById(`b-${id}`)
        const i = id.slice(1, 2)
        const d = id.slice(4, 5)
        GameBoard.gameArr[i][d] = getPiece()
        box.textContent = getPiece()
        GameBoard.checkGameOver()
        GameBoard.checkWinner(getPiece())
      
    }
       
    return {getPiece, getName, makeMove};
  };  

X = Player(player2, X)
O = Player(player1, O)

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
            box.addEventListener('click', (e) => GameBoard.pickTurn().makeMove(e), { once: true }) }
        row.appendChild(box);
    }
}
}

document.addEventListener('DOMContentLoaded', addGrid() ) 


