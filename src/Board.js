export default class Board {
  constructor(size) {
    this.size = size;
    this.cells = [];
  }

  render(container) {
    const board = document.createElement('div');
    board.className = 'game-board';
    
    for (let i = 0; i < this.size * this.size; i++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.dataset.index = i;
      this.cells.push(cell);
      board.appendChild(cell);
    }
    
    container.innerHTML = '';
    container.appendChild(board);
  }
}