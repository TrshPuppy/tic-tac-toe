// Globals:
let gameboard;
const gameBoardUI = document.querySelector(".game-board");
let playerPieces;
let gameTile;
let turnNumber = 1;

refreshGame();

//let playerStringChoice = prompt("Choose x or o");
let playerStringChoice = "x";

setPlayerPieces(playerStringChoice);

// Functions:
function setPlayerPieces(string) {
  if (string === "x" || string === "X") {
    return (playerPieces = "xo");
  }
  return (playerPieces = "ox");
}

function updateGameBoardArray(row, col) {
  if (gameBoard[row][col] !== "") {
    return false;
  }
  gameBoard[row][col] = playerPieces[turnNumber & 1];
  return true;
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
    gameTile.classList.add("game-tile");
    gameTile.setAttribute("data-number", `${arrayRowIndex},${arrayColIndex}`);
    gameBoardUI.insertAdjacentElement("beforeend", gameTile);
    gameTile.addEventListener("click", (e) => {
      if (updateGameBoardArray(arrayRowIndex, arrayColIndex)) {
        updateBoardUI(e);
        if (!checkForWin(gameBoard)) {
          changeTurns();
        } else {
          console.log("win!");
        }
      }
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

function checkForWin(gameBoard) {
  // Row
  for (let row = 0; row < 3; row++) {
    if (checkPointAgainstDelta(row, 0, 0, 1)) {
      return true;
    }
  }
  // Col
  for (let col = 0; col < 3; col++) {
    if (checkPointAgainstDelta(0, col, 1, 0)) {
      return true;
    }
  }
  //Diagonals
  if (
    checkPointAgainstDelta(0, 0, 1, 1) ||
    checkPointAgainstDelta(0, 2, 1, -1)
  ) {
    return true;
  }

  function checkPointAgainstDelta(pointY, pointX, deltaY, deltaX) {
    const startingCellValue = gameBoard[pointY][pointX];
    if (startingCellValue !== "") {
      if (
        gameBoard[pointY + deltaY][pointX + deltaX] === startingCellValue &&
        gameBoard[pointY + deltaY * 2][pointX + deltaX * 2] ===
          startingCellValue
      ) {
        return true;
      }
    }
    return false;
  }
}
