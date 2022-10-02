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

    const setGameOver = (piece) => {
        gameOver = true 
        const endGame = document.createElement("div")
        endGame.textContent = "Game over: " + piece + " wins!"
        const end = document.querySelector(".end")
        end.appendChild(endGame)
        const button = document.createElement("button")
        button.textContent = "restart game"
        end.appendChild(button)
        //add event listener, clear each box 
        //look up way to find players name via piece 
        
    }
 
    const checkWinner = (piece) => {
      
        for (let i = 0; i < gameArr.length; i ++) {

            let hori = gameArr[i].every((element) => element === piece) //checks for horizontal
 
            let verticalArr =  [gameArr[0][i], gameArr[1][i], gameArr[2][i]]   
            let verti = verticalArr.every((element) => element === piece)
            if (verti || hori) {
                setGameOver(piece)
            }
        }    
     
        if (gameArr[0][0] == gameArr[1][1] && gameArr[1][1] == gameArr[2][2] && gameArr[2][2] == piece) 
            {
            setGameOver(piece);
         }
      
        if (gameArr[0][2] == gameArr[1][1] && gameArr[1][1] == gameArr[2][0] && gameArr[2][0] == piece)
           { setGameOver(piece)    }

        
        }
    
    

    // ANOTHER POSSIBLE SOLUTION
    // const checkWinner = (piece) => {
    //     const winConditions = [
    //         [[0, 0], [0, 1], [0, 2]],
    //         [[1, 0], [1, 1], [1, 2]],
    //         [[2, 0], [2, 1], [2, 2]], 
    //         [[0, 0], [1, 0], [2, 0]], 
    //         [[0, 1], [1, 1], [2, 1]], 
    //         [[0, 2], [1, 2], [2, 2]], 
    //         [[0, 0], [1, 1], [2, 2]], 
    //         [[0, 2], [1, 1], [2, 0]]
    //     ]

    //     for (let i = 0; i < winConditions.length; i++) {
    //         if (winConditions[i].every((coordinate) => gameArr[coordinate[0]][coordinate[1]] === piece)) {
    //             console.log('win');
    //             return true;
    //         }
    //     }            

    //     console.log('no win')
    //     return false;
    // }


    const checkGameOver = () => {
     
        if (gameArr[0].includes(" ") == false && gameArr[1].includes(" ") == false && gameArr[2].includes(" ") == false ) {
            gameOver = true }
          
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


