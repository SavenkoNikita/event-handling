export default class Game {
  constructor(board, goblin, score) {
    this.board = board;
    this.goblin = goblin;
    this.score = score;
    this.isPlaying = false;
    this.onCellClick = this.onCellClick.bind(this);
  }

  start(container) {
    this.isPlaying = true;
    this.board.render(container);
    this.initEventListeners();
    this.nextGoblin();
  }

  initEventListeners() {
    this.board.cells.forEach(cell => {
      cell.addEventListener('click', this.onCellClick);
    });

    const restartButton = document.getElementById('restartButton');
    if (restartButton) {
      restartButton.addEventListener('click', () => this.restart());
    }
  }

  onCellClick(e) {
    if (!this.isPlaying) return;
    
    const cell = e.currentTarget;
    if (cell.classList.contains('goblin')) {
      this.goblin.hide();
      this.score.addPoint();
      this.nextGoblin();
    } else {
      this.score.addMiss();
      this.checkGameOver();
    }
  }

  nextGoblin() {
    if (!this.isPlaying) return;
    
    this.goblin.show(() => {
      this.score.addMiss();
      this.checkGameOver();
      if (this.isPlaying) {
        this.nextGoblin();
      }
    });
  }

  checkGameOver() {
    if (this.score.missed >= 5) {
      this.gameOver();
    }
  }

  gameOver() {
    this.isPlaying = false;
    this.goblin.hide();
    
    const modal = document.getElementById('gameModal');
    const modalMessage = document.getElementById('modalMessage');
    
    if (modal && modalMessage) {
      modalMessage.textContent = `Ваш результат: ${this.score.points} попаданий`;
      modal.style.display = 'flex';
    }
  }

  restart() {
    const modal = document.getElementById('gameModal');
    if (modal) {
      modal.style.display = 'none';
    }
    
    this.score.reset();
    this.isPlaying = true;
    this.nextGoblin();
  }

  stop() {
    this.isPlaying = false;
    this.goblin.hide();
    this.board.cells.forEach(cell => {
      cell.removeEventListener('click', this.onCellClick);
    });
  }
}