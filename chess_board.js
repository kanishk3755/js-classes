// Create the chessboard container
const board = document.createElement("div");
board.style.display = "grid";
board.style.gridTemplateColumns = "repeat(8, 60px)";
board.style.gridTemplateRows = "repeat(8, 60px)";
board.style.width = "480px";
board.style.height = "480px";
board.style.border = "2px solid black";
board.style.margin = "20px auto";

// Create 64 squares
for (let row = 0; row < 8; row++) {
  for (let col = 0; col < 8; col++) {
    const square = document.createElement("div");
    const isBlack = (row + col) % 2 === 1;

    square.style.width = "60px";
    square.style.height = "60px";
    square.style.backgroundColor = isBlack ? "black" : "white";
    board.appendChild(square);
  }
}

// Append to the body
document.body.appendChild(board);
