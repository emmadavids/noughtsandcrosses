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
    const winArr = [] 
    let ind = 0;
    const checkWinner = (piece) => {
        for (let i = 0; i < gameArr.length; i ++) {
        let cond = gameArr[i].every((element) => element === piece) 
        const miniArr = []
        console.log(gameArr[i][ind])
        for (let j = 0; j < gameArr[i].length; j++) {
        console.log(gameArr[i][ind])
        ind ++
        }
        } }
     
        
    


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
<<<<<<< HEAD

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
=======
    const getPiece = () => piece;
  
        //     GameBoard.isXTurn = false;
        // }
       
        

        // if (GameBoard.isXTurn) {
        //     GameBoard.gameArr[i][d] = X
        //     box.textContent = X 
        //     GameBoard.isXTurn = false;
        // }
        // else {
        //     GameBoard.gameArr[i][d] = O
        //     box.textContent = O 
        //     GameBoard.isXTurn = true; 
        //     console.log(GameBoard.gameArr)
        // }

    return {getPiece};
  };  

const emma = Player('emma', X)
const mart = Player('martin', O)

let player = emma 
//player is emma 
  
  function makeMove(e, player) {
    console.log("playpiece:" + player.getPiece())
    const id = e.srcElement.id.slice(2, e.srcElement.id.length)
    const box = document.getElementById(`b-${id}`)
    const i = id.slice(1, 2)
    const d = id.slice(4, 5)
    GameBoard.gameArr[i][d] = player.getPiece()
    box.textContent = player.getPiece() 
    if (GameBoard.isXTurn) {
        GameBoard.isXTurn = false; //
        player = mart;
    }
    else {
        player = emma
        GameBoard.isXTurn = true;
}
  }
>>>>>>> aaeb42cbbe2915367f8bac885affd5790ec83c56

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
<<<<<<< HEAD
            box.addEventListener('click', (e) => GameBoard.pickTurn().makeMove(e), { once: true }) }
=======
            box.addEventListener('click', (e) => makeMove(e, player)) }
>>>>>>> aaeb42cbbe2915367f8bac885affd5790ec83c56
        row.appendChild(box);
    }
}
}

document.addEventListener('DOMContentLoaded', addGrid() ) 


