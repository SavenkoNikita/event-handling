import goblinImage from './assets/goblin.png';

export default class Goblin {
  constructor(board) {
    this.board = board;
    this.currentCell = null;
    this.timer = null;
    this.lastCellIndex = -1;
  }

  getRandomCell() {
    const cells = this.board.cells;
    if (cells.length <= 1) return cells[0];
    
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * cells.length);
    } while (randomIndex === this.lastCellIndex);
    
    this.lastCellIndex = randomIndex;
    return cells[randomIndex];
  }

  show(onMiss) {
    this.hide();
    
    const cell = this.getRandomCell();
    this.currentCell = cell;
    
    const goblinImg = document.createElement('img');
    goblinImg.src = goblinImage;
    goblinImg.className = 'goblin-image';
    goblinImg.alt = 'Goblin';
    
    this.currentCell.appendChild(goblinImg);
    this.currentCell.classList.add('goblin');

    this.timer = setTimeout(() => {
      this.hide();
      if (onMiss) onMiss();
    }, 1000);
  }

  hide() {
    if (this.currentCell) {
      const goblinImg = this.currentCell.querySelector('.goblin-image');
      if (goblinImg) {
        goblinImg.remove();
      }
      this.currentCell.classList.remove('goblin');
      this.currentCell = null;
    }
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }
}