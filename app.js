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

function createBoard() {
  gameBoardUI.style.gridTemplateColumns = "repeat(3,1fr)";
  gameBoardUI.style.gridTemplateRows = "repeat(3,1fr)";

  for (let i = 1; i < 10; i++) {
    gameTile = document.createElement("div");
    gameTile.setAttribute("data-number", i);
    gameBoardUI.insertAdjacentElement("beforeend", gameTile);
  }
}
