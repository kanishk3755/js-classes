// === STYLE SETUP ===
document.body.style.fontFamily = "sans-serif";
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.alignItems = "center";
document.body.style.marginTop = "40px";

// === CREATE GAME ELEMENTS ===
const game = document.createElement("div");
game.id = "game";
Object.assign(game.style, {
  display: "flex",
  flexWrap: "wrap",
  width: "315px", // 3 * 100px + 2 * 5px (gap)
  height: "315px",
  gap: "5px",
});
document.body.appendChild(game);

const statusText = document.createElement("div");
statusText.id = "status";
statusText.style.marginTop = "20px";
statusText.style.fontSize = "1.5rem";
document.body.appendChild(statusText);

const resetBtn = document.createElement("button");
resetBtn.id = "reset";
resetBtn.textContent = "Restart";
Object.assign(resetBtn.style, {
  marginTop: "10px",
  padding: "6px 14px",
  fontSize: "1rem",
  cursor: "pointer",
});
document.body.appendChild(resetBtn);

// === GAME LOGIC ===
let currentPlayer = "X";
let board = Array(9).fill("");

const winPatterns = [
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6]
];

function createBoard() {
  game.innerHTML = "";
  board.forEach((cell, i) => {
    const cellDiv = document.createElement("div");
    cellDiv.classList.add("cell");
    cellDiv.dataset.index = i;
    cellDiv.textContent = cell;
    Object.assign(cellDiv.style, {
      width: "100px",
      height: "100px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#eee",
      fontSize: "2.5rem",
      cursor: "pointer",
      border: "1px solid #ccc",
      boxSizing: "border-box",
    });
    cellDiv.addEventListener("click", handleClick, { once: true });
    game.appendChild(cellDiv);
  });
  statusText.textContent = `Current Player: ${currentPlayer}`;
}

function handleClick(e) {
  const index = e.target.dataset.index;
  if (board[index] !== "") return;

  board[index] = currentPlayer;
  e.target.textContent = currentPlayer;

  if (checkWinner()) {
    statusText.textContent = `🎉 Player ${currentPlayer} Wins!`;
    disableBoard();
    return;
  }

  if (board.every(cell => cell !== "")) {
    statusText.textContent = "It's a Draw!";
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  statusText.textContent = `Current Player: ${currentPlayer}`;
}

function checkWinner() {
  return winPatterns.some(pattern => {
    const [a, b, c] = pattern;
    return board[a] && board[a] === board[b] && board[a] === board[c];
  });
}

function disableBoard() {
  document.querySelectorAll(".cell").forEach(cell => {
    cell.replaceWith(cell.cloneNode(true)); // removes listeners
  });
}

resetBtn.addEventListener("click", () => {
  board = Array(9).fill("");
  currentPlayer = "X";
  createBoard();
});

// Start game
createBoard();
