// Player 1 is "X", Player 2 is "O"
let currentPlayer = "X";
let gameOver = false;

// Get all cells
const cells = document.querySelectorAll(".cell");

// Add click event listeners to cells
cells.forEach(cell => {
  cell.addEventListener("click", handleCellClick);
});

// Handle cell click
function handleCellClick(event) {
  const cell = event.target;

  // If cell is already marked or game is over, do nothing
  if (cell.textContent !== "" || gameOver) return;

  // Mark the cell with the current player
  cell.textContent = currentPlayer;

  // Check if current player has won
  if (checkWin()) {
    celebrateWin(currentPlayer);
    gameOver = true;
    return;
  }

  // Check if it's a draw
  if (checkDraw()) {
    celebrateDraw();
    gameOver = true;
    return;
  }

  // Switch players
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

// Check if a player has won
function checkWin() {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];

  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (
      cells[a].textContent === currentPlayer &&
      cells[b].textContent === currentPlayer &&
      cells[c].textContent === currentPlayer
    ) {
      return true;
    }
  }

  return false;
}

// Check if it's a draw
function checkDraw() {
  for (let cell of cells) {
    if (cell.textContent === "") {
      return false;
    }
  }
  return true;
}

// Reset the game
function resetGame() {
  cells.forEach(cell => {
    cell.textContent = "";
  });

  currentPlayer = "X";
  gameOver = false;
}

// Add event listener to reset button
const resetButton = document.createElement("button");
resetButton.textContent = "Reset";
resetButton.addEventListener("click", resetGame);
document.body.appendChild(resetButton);

// Celebrate win
function celebrateWin(player) {
  const winMessage = document.createElement("div");
  winMessage.textContent = "You win!";
  winMessage.classList.add("win-message");
  document.body.appendChild(winMessage);

  // Add celebration effect
  winMessage.addEventListener("animationend", () => {
    winMessage.remove();
  });
}

// Celebrate draw
function celebrateDraw() {
  const drawMessage = document.createElement("div");
  drawMessage.textContent = "It's a draw!";
  drawMessage.style.alignItems = 'center'; // Fix typo here
  drawMessage.classList.add("draw-message");
  document.body.appendChild(drawMessage);

  // Add celebration effect
  drawMessage.addEventListener("animationend", () => {
    drawMessage.remove();
  });
}
