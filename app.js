// Globals:
let gameBoard = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

let playerPieceChoice = prompt("choose a gamepiece");

const player = createPlayer(playerPieceChoice);
console.log(player);

// Functions:
function createPlayer(gamePiece) {
  return {
    gamePiece: gamePiece,
  };
}
