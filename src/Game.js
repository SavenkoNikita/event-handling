import Goblin from './Goblin';
import UI from './UI';

export default class Game {
  constructor() {
    this.ui = new UI();
    this.goblin = new Goblin(this.ui.board);
    this.score = 0;
    this.missed = 0;
    this.maxMissed = 5;
    this.interval = null;
  }

  start() {
    this.ui.createBoard();
    this.goblin.setBoard(this.ui.board);

    this.interval = setInterval(() => {
      this.goblin.move();
      this.checkMissed();
    }, 1000);

    this.ui.board.addEventListener('click', (event) => this.handleClick(event));
  }

  handleClick(event) {
    if (event.target.classList.contains('goblin')) {
      this.score++;
      this.ui.updateScore(this.score);
      this.goblin.hide();
    }
  }

  checkMissed() {
    if (!this.goblin.wasClicked) {
      this.missed++;
      this.ui.updateMissed(this.missed);

      if (this.missed >= this.maxMissed) {
        clearInterval(this.interval);
        alert('Игра окончена!');
      }
    }
    this.goblin.wasClicked = false;
  }
}