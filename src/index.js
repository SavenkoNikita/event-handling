import './styles.css';
import goblinImage from './assets/goblin.png';

console.log('Game started!');

// Создаем игровое поле
const gameBoard = document.getElementById('gameBoard');
const cells = [];

// Создаем 4x4 поле
for (let i = 0; i < 16; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cells.push(cell);
    gameBoard.appendChild(cell);
}

// Создаем гоблина
const goblin = document.createElement('img');
goblin.src = goblinImage;
goblin.className = 'goblin';
goblin.alt = 'Гоблин';

// Начальная позиция
let currentPosition = Math.floor(Math.random() * 16);
cells[currentPosition].appendChild(goblin);

// Функция перемещения
function moveGoblin() {
    let newPosition;
    do {
        newPosition = Math.floor(Math.random() * 16);
    } while (newPosition === currentPosition);
    
    // Удаляем из текущей ячейки
    cells[currentPosition].innerHTML = '';
    
    // Добавляем в новую ячейку
    cells[newPosition].appendChild(goblin);
    currentPosition = newPosition;
}

// Запускаем перемещение каждую секунду
setInterval(moveGoblin, 1000);