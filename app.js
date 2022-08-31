let gameBoard = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

function createPlayer(gamePiece) {
  return {
    gamePiece: gamePiece,
  };
}

const player = createPlayer("X");
console.log(player);
