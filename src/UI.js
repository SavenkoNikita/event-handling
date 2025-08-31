export default class UI {
  constructor() {
    this.board = document.getElementById('gameBoard');
    this.scoreElement = document.getElementById('score');
    this.missedElement = document.getElementById('missed');
  }

  createBoard() {
    for (let i = 0; i < 16; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      this.board.appendChild(cell);
    }
  }

  updateScore(score) {
    this.scoreElement.textContent = `Счёт: ${score}`;
  }

  updateMissed(missed) {
    this.missedElement.textContent = `Промахов: ${missed}`;
  }
}