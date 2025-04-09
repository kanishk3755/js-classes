// === CONFIG ===
const rows = 10;
const cols = 10;
const totalMines = 10;

// === CSS using DOM + Flexbox ===
const style = document.createElement('style');
document.head.appendChild(style);
const sheet = style.sheet;

sheet.insertRule(`
  body {
    font-family: sans-serif;
    background: #eee;
    margin: 0;
    padding: 20px;
    display: flex;
    justify-content: center;
  }
`, sheet.cssRules.length);

sheet.insertRule(`
  .grid {
    display: flex;
    flex-wrap: wrap;
    width: ${cols * 32}px;
  }
`, sheet.cssRules.length);

sheet.insertRule(`
  .cell {
    width: 30px;
    height: 30px;
    margin: 1px;
    background: #bbb;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    line-height: 30px;
    cursor: pointer;
    user-select: none;
  }
`, sheet.cssRules.length);

sheet.insertRule(`
  .cell.revealed {
    background: #ddd;
    cursor: default;
  }
`, sheet.cssRules.length);

sheet.insertRule(`
  .cell.mine {
    background: red;
    color: white;
  }
`, sheet.cssRules.length);

sheet.insertRule(`
  .cell.flagged {
    background: orange;
    color: white;
  }
`, sheet.cssRules.length);

// === Create Game Board ===
const grid = document.createElement('div');
grid.className = 'grid';
document.body.appendChild(grid);

let board = [];
let mineSet = new Set();

// Place random mines
while (mineSet.size < totalMines) {
  const r = Math.floor(Math.random() * rows);
  const c = Math.floor(Math.random() * cols);
  mineSet.add(`${r},${c}`);
}

// Initialize cells
for (let r = 0; r < rows; r++) {
  board[r] = [];
  for (let c = 0; c < cols; c++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.dataset.row = r;
    cell.dataset.col = c;
    cell.addEventListener('click', handleLeftClick);
    cell.addEventListener('contextmenu', handleRightClick);
    grid.appendChild(cell);
    board[r][c] = {
      element: cell,
      isMine: mineSet.has(`${r},${c}`),
      revealed: false,
      flagged: false,
    };
  }
}

// === Game Logic ===
function handleLeftClick(e) {
  const cellEl = e.target;
  const row = +cellEl.dataset.row;
  const col = +cellEl.dataset.col;
  revealCell(row, col);

  if (board[row][col].isMine) {
    revealAllMines();
    alert("💥 Game Over!");
  }
}

function handleRightClick(e) {
  e.preventDefault();
  const cellEl = e.target;
  const row = +cellEl.dataset.row;
  const col = +cellEl.dataset.col;
  const cell = board[row][col];
  if (cell.revealed) return;

  cell.flagged = !cell.flagged;
  cellEl.classList.toggle('flagged');
  cellEl.textContent = cell.flagged ? '🚩' : '';
}

function revealCell(r, c) {
  if (r < 0 || r >= rows || c < 0 || c >= cols) return;
  const cell = board[r][c];
  if (cell.revealed || cell.flagged) return;

  cell.revealed = true;
  cell.element.classList.add('revealed');

  if (cell.isMine) {
    cell.element.classList.add('mine');
    cell.element.textContent = '💣';
    return;
  }

  const count = countAdjacentMines(r, c);
  if (count > 0) {
    cell.element.textContent = count;
  } else {
    for (let dr = -1; dr <= 1; dr++) {
      for (let dc = -1; dc <= 1; dc++) {
        if (dr !== 0 || dc !== 0) {
          revealCell(r + dr, c + dc);
        }
      }
    }
  }
}

function countAdjacentMines(r, c) {
  let count = 0;
  for (let dr = -1; dr <= 1; dr++) {
    for (let dc = -1; dc <= 1; dc++) {
      const nr = r + dr;
      const nc = c + dc;
      if (
        nr >= 0 &&
        nr < rows &&
        nc >= 0 &&
        nc < cols &&
        board[nr][nc].isMine
      ) {
        count++;
      }
    }
  }
  return count;
}

function revealAllMines() {
  mineSet.forEach((pos) => {
    const [r, c] = pos.split(',').map(Number);
    const cell = board[r][c];
    cell.revealed = true;
    cell.element.classList.add('mine');
    cell.element.textContent = '💣';
  });
}
