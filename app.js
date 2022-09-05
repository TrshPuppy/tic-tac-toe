// Globals:
let gameboard;
let playerStringChoice = "";
const gameBoardUI = document.querySelector(".game-board");
let playerPieces;
let gameTile;
let turnNumber = 0;
// const modalClose = document.querySelector(".modal-close");
const modalActual = document.querySelector("#start-modal");
const winModal = document.querySelector("#win-modal");
const modalX = document.querySelector("#choose-X");
const modalO = document.querySelector("#choose-O");
const reStartBtn = document.querySelector(".restart");
const counter = document.querySelector(".counter");

startGame();

// Functions:
function startGame() {
  displayModal(modalActual);
  setPlayerPieces("x");

  turnNumber = 0;
  gameBoard = createNewBoardArray();
  gameBoardUI.textContent = "";

  createBoard();
  counter.innerText = playerPieces[turnNumber & 1];
}

function setPlayerPieces(string) {
  if (string === "x") {
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
          displayWinModal();
          // refreshGame();
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
  gameBoardUI.textContent = "";

  createBoard();
  displayModal(modalActual);
  changeTurns();
}

function changeTurns() {
  turnNumber += 1;

  counter.innerText = playerPieces[turnNumber & 1];
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

function displayModal(modal) {
  modal.style.display = "block";
}

function closeModal(modal) {
  modal.style.display = "none";
}

function displayWinModal() {
  winModal.style.display = "block";
  const winMessage = document.querySelector(".win-message");
  winMessage.innerText = `Player ${playerPieces[turnNumber & 1]} wins!`;

  const playAgainBtn = document.querySelector(".play-again");
  playAgainBtn.addEventListener("click", () => {
    closeModal(winModal);
    // refreshGame();
    startGame();
    displayModal(modalActual);
  });
}

// Event listeners:
reStartBtn.addEventListener("click", () => {
  // refreshGame();
  startGame();
});

modalX.addEventListener("click", () => {
  playerStringChoice = "x";
  setPlayerPieces(playerStringChoice);
  closeModal(modalActual);
  counter.innerText = playerPieces[turnNumber & 1];
});

modalO.addEventListener("click", () => {
  playerStringChoice = "o";
  setPlayerPieces(playerStringChoice);
  closeModal(modalActual);
  counter.innerText = playerPieces[turnNumber & 1];
});

// TO DO:
// Fix so that starting player is X and game board updates w/ x when tile clicked
//  Add and style modal for win/lose/tie.

//    JS: function to check for tied board

// Odin optional/extra:
//  Allow players to input their names.
//  Create an "unbeatable AI using minmax algorithms"
