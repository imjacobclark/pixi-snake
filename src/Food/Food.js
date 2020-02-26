import Cell from '../Snake/Cell';

export default class Food extends Cell {
  constructor(x, y, graphics) {
    super(x, y);
    this.graphics = graphics;
  }

  randomlyReposition(x, y) {
    this.x = Math.round(Math.random() * x);
    this.y = Math.round(Math.random() * y);
  }

  draw() {
    this.graphics.clear();
    this.graphics.beginFill(0xFFFFFF);
    this.graphics.drawRect(this.x * 11, this.y * 11, 10, 10);
  }
}
