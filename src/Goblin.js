import goblinImage from './assets/goblin.png';

export default class Goblin {
  constructor(board) {
    this.board = board;
    this.currentCell = null;
    this.wasClicked = false;
  }

  setBoard(board) {
    this.board = board;
  }

  move() {
    if (this.currentCell) {
      this.currentCell.innerHTML = '';
    }

    const cells = Array.from(this.board.querySelectorAll('.cell'));
    const randomIndex = Math.floor(Math.random() * cells.length);
    this.currentCell = cells[randomIndex];

    const goblin = document.createElement('img');
    goblin.src = goblinImage;
    goblin.className = 'goblin';
    goblin.alt = 'Гоблин';

    this.currentCell.appendChild(goblin);
  }

  hide() {
    if (this.currentCell) {
      this.currentCell.innerHTML = '';
      this.wasClicked = true;
    }
  }
}