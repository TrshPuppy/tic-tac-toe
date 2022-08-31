// Globals:
let gameBoard = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

const gameBoardUI = document.querySelector(".game-board");
let gameTile;

createBoard();

let playerPieceChoice = prompt("choose a gamepiece");

const player = createPlayer(playerPieceChoice);
console.log(player);

// Functions:
function createPlayer(gamePiece) {
  return {
    gamePiece: gamePiece,
  };
}

function updateGameBoardArray(row, col) {
  gameBoard[row][col] = playerPieceChoice;
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
    gameTile.addEventListener("click", () => {
      updateGameBoardArray(arrayRowIndex, arrayColIndex);
      //   updateUI();
    });
  }
}

// updateUI(){
// }
