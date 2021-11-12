// eventlisteners

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', cellClick));
document.querySelector('.restart').addEventListener('click',restartGame);

// status

const statusDisplay = document.querySelector('.status');

// variables to track game state

// in case of end scenario 

let gameActive = true;

// current player 
// X always first player
let currentPlayer = "X";

// game state 

let gameState = ["","","","","","","","",""];


// messages 

const winMsg = () => `Player ${currentPlayer} has won`;
const drawMsg = () => `There is no winner`;
const currentPlayerTurn = () => `Its ${currentPlayer}'s turn`;

// inital msg to let the players know whose turn is

statusDisplay.innerHTML = currentPlayerTurn();

//  update cell 
function cellPlayed(clickedCell, clickedIndex){

    gameState[clickedIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}
// change plaer, if X then O else X
function playerChange(){

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerHTML = currentPlayer;
}

const win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6] 
   ];

function resultValidate(){

       let roundWon = false;
       for(let i = 0; i <= 7; i++){
        const winWin = win[i];
        let a = gameState[winWin[0]];
        let b = gameState[winWin[1]];
        let c = gameState[winWin[2]];
        if (a === '' || b === '' || c === '' )
        { continue; }
    
    if (a === b && b === c ){
        roundWon = true; 
        break;
    }
}
    if (roundWon){
        statusDisplay.innerHTML = winMsg();
        gameActive = false;
        return;
    }
    // if table is filled 
    let tableFilled = !gameState.includes("");
    if (tableFilled){
        statusDisplay.innerHTML = drawMsg();
        gameActive = false;
        return;
    }
    playerChange();

}
// klik na celiju
function cellClick(e){
    // clicked html element in a variable 
    const clickedCell = e.target;
    // console.log(clickedCell);
    // get index from cell
    const clickedIndex = parseInt(clickedCell.getAttribute('index'));
    // console.log(clickedIndex);
    //  check if cell is empty 
    if (gameState[clickedIndex] !== "" || !gameActive){
        return;
    }

    cellPlayed(clickedCell, clickedIndex);
    resultValidate();

}

function restartGame(){
    gameActive = true; 
    // X always first player
    currentPlayer = "X";
    gameState = ["","","","","","","","",""];
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
}


