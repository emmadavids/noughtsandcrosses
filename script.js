const container = document.querySelector('.container')
let X = "X"
let O = "O"
const player1 = prompt("Please enter player one's name")
const player2 = prompt("Please enter player two's name")
const GameBoard = (() => {
    let isXTurn = true
    let gameOver = false
    let gameArr = [[" ", " ", " "],[" ", " ", " "],[" ", " ", " "]]

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
    
  
    const resetArr = () => {
        GameBoard.gameArr = [[" ", " ", " "],[" ", " ", " "],[" ", " ", " "]]
    }
    const setGameOver = (piece) => {
        GameBoard.gameOver = true 
        const endGame = document.createElement("div")
        endGame.textContent = "Game over: " + piece + " wins!"
        const end = document.querySelector(".end")
        end.appendChild(endGame)
        const button = document.createElement("button")
        button.textContent = "restart game"
        end.appendChild(button)
        button.addEventListener('click', () => { 
            resetArr()
            setBoard()
            button.style.display = 'none'
            endGame.style.display = 'none'})
         
    }
 
    const checkWinner = (piece) => {
        console.log("gameboard array inside check winner func" + GameBoard.gameArr)
        for (let i = 0; i < GameBoard.gameArr.length; i ++) {

            let hori = GameBoard.gameArr[i].every((element) => element === piece) //checks for horizontal
 
            let verticalArr =  [...GameBoard.gameArr[0][i], GameBoard.gameArr[1][i], GameBoard.gameArr[2][i]]   
            let verti = verticalArr.every((element) => element === piece)
            if (verti || hori) {
           
                setGameOver(piece)
            }
        }    
     
        if (GameBoard.gameArr[0][0] == GameBoard.gameArr[1][1] && GameBoard.gameArr[1][1] == GameBoard.gameArr[2][2] && GameBoard.gameArr[2][2] == piece) 
            {
            setGameOver(piece);
         }
      
        if (GameBoard.gameArr[0][2] == GameBoard.gameArr[1][1] && GameBoard.gameArr[1][1] == GameBoard.gameArr[2][0] && GameBoard.gameArr[2][0] == piece)
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
            gameOver = true 
            const endGame = document.createElement("div")
            endGame.textContent = "Game over: It's a tie!"
            const end = document.querySelector(".end")
            end.appendChild(endGame) }
          
        }
    
     return {
        gameArr, pickTurn, checkGameOver, checkWinner, gameOver
     };
   
   })();

const Player = (name, piece) => {

    const getPiece = () => piece;

    const getName = () => name;

    const makeMove = (e) =>  {
        if (GameBoard.gameOver == false) {
        const id = e.srcElement.id.slice(2, e.srcElement.id.length)
        const box = document.getElementById(`b-${id}`)
        const i = id.slice(1, 2)
        const d = id.slice(4, 5)
        GameBoard.gameArr[i][d] = getPiece()
        box.textContent = getPiece()
        GameBoard.checkGameOver()
        GameBoard.checkWinner(getPiece())
        console.log(GameBoard.gameArr)
        const head = document.querySelector(".head")
        const name = getName()
        head.textContent = name + "'s turn"    
      
        }
        else {
            alert("Game is over, click 'restart game' button to restart game")
        }
    }
       
    return {getPiece, getName, makeMove};
  };  

X = Player(player2, X)
O = Player(player1, O)

function setBoard() {

container.textContent = " "
GameBoard.gameOver = false
const head = document.createElement("h2");
head.classList.add('head')
const name = GameBoard.pickTurn().getName()
head.textContent = name + "'s turn"    
container.appendChild(head)

console.log("game array" + GameBoard.gameArr)
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

document.addEventListener('DOMContentLoaded', setBoard() ) 


