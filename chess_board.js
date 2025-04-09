// Create the chessboard container
const board = document.createElement("div");
board.style.display = "flex";
board.style.flexWrap = "wrap";
board.style.width = "480px";
board.style.height = "480px";
board.style.border = "2px solid black";
board.style.margin = "20px auto";

// Create 64 squares
for (let row = 0; row < 8; row++) {
  for (let col = 0; col < 8; col++) {
    const square = document.createElement("div");
    const isBlack = (row + col) % 2 === 1;

    square.style.flex = "0 0 60px";
    square.style.height = "60px";
    square.style.backgroundColor = isBlack ? "black" : "white";
    board.appendChild(square);
  }
}

// Append to the body
document.body.appendChild(board);
