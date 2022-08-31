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

  for (let i = 0; i < 9; ++i) {
    gameTile = document.createElement("div");
    gameTile.setAttribute(
      "data-number",
      `${Math.trunc(i / 3)},${i % 3}`
      //   (gameBoard[Math.trunc(i / 3)][i % 3] = i);
    );
    gameBoardUI.insertAdjacentElement("beforeend", gameTile);
  }

  //   for (let i = 0; i < 3; i++) {
  //     for (let j = 0; j < 3; j++) {
  //       gameTile = document.createElement("div");
  //       gameTile.setAttribute("data-number", i);
  //       gameBoardUI.insertAdjacentElement("beforeend", gameTile);
  //       gameTile.addEventListener("click", () => {
  //         updateGameBoardArray("game time data number");
  //         updateUI();
  //       });
  //     }
  //   }
}

// updateGameBoardArray("game tile data number"){
// }

// updateUI(){
// }
