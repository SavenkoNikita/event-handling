export default class Score {
  constructor() {
    this.points = 0;
    this.missed = 0;
    this.pointsEl = document.getElementById('points');
    this.missedEl = document.getElementById('missed');
    this.update();
  }

  addPoint() {
    this.points += 1;
    this.update();
  }

  addMiss() {
    this.missed += 1;
    this.update();
  }

  reset() {
    this.points = 0;
    this.missed = 0;
    this.update();
  }

  update() {
    if (this.pointsEl) this.pointsEl.textContent = `Очки: ${this.points}`;
    if (this.missedEl) this.missedEl.textContent = `Пропущено: ${this.missed}`;
  }
}