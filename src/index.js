import './styles.css';
import hammerCursor from './assets/hammer.png';
import Game from './Game';

document.documentElement.style.setProperty('--hammer-cursor', `url(${hammerCursor}), auto`);

const game = new Game();
game.start();