// Globals:
let gameboard;
const gameBoardUI = document.querySelector(".game-board");
let playerPieces;
let gameTile;
let turnNumber = 1;

refreshGame();

let playerStringChoice = prompt("Choose x or o");

setPlayerPieces(playerStringChoice);

// Functions:
function setPlayerPieces(string) {
  if (string === "x" || string === "X") {
    return (playerPieces = "xo");
  }
  return (playerPieces = "ox");
}

function updateGameBoardArray(row, col) {
  gameBoard[row][col] = playerPieces[turnNumber & 1];
}

function updateBoardUI(e) {
  e.target.innerText = playerPieces[turnNumber & 1];
}

function createBoard() {
  gameBoardUI.style.gridTemplateColumns = "repeat(3,1fr)";
  gameBoardUI.style.gridTemplateRows = "repeat(3,1fr)";

  for (let i = 0; i < 9; ++i) {
    const arrayRowIndex = Math.trunc(i / 3);
    const arrayColIndex = i % 3;
    gameTile = document.createElement("div");
    gameTile.setAttribute("data-number", `${arrayRowIndex},${arrayColIndex}`);
    gameBoardUI.insertAdjacentElement("beforeend", gameTile);
    gameTile.addEventListener("click", (e) => {
      updateGameBoardArray(arrayRowIndex, arrayColIndex);
      updateBoardUI(e);
      changeTurns();
    });
  }
}

function createNewBoardArray() {
  return [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
}

function refreshGame() {
  turnNumber = 0;
  playerPieces = "";

  gameBoard = createNewBoardArray();

  createBoard();
}

function changeTurns() {
  turnNumber += 1;
}

// updateUI(){
// }

//REFRESH GAMEBOARD PSEUDOCODE
// button click =>
// {
//     function (refreshboard)
// }

// function refreshboard
// {
//     create new gameBoard
//      reset player pice choice
//      reset gameboard array

// }
