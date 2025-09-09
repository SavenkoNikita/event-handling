import Board from './Board';
import Goblin from './Goblin';
import Score from './Score';
import Game from './Game';
import './styles.css';

const board = new Board(4);
const score = new Score();
const goblin = new Goblin(board);
const game = new Game(board, goblin, score);

const container = document.getElementById('game');
game.start(container);
