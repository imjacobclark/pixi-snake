import SnakeCell from './SnakeCell';

const UP = 'up';
const DOWN = 'down';
const RIGHT = 'right';
const LEFT = 'left';
const DEFAULT_DIRECTION = RIGHT;

export default class Snake {
  constructor(graphics, collision) {
    this.cells = [
      new SnakeCell(0, 0),
      new SnakeCell(0, 1),
      new SnakeCell(0, 2),
      new SnakeCell(0, 3),
      new SnakeCell(0, 4),
    ];

    this.nextDirection = DEFAULT_DIRECTION;
    this.direction = null;

    this._graphics = graphics;
    this._collision = collision;
  }

  get graphics() {
    return this._graphics;
  }

  right() {
    if (this.direction === LEFT) return;
    this.nextDirection = RIGHT;
  }

  left() {
    if (this.direction === RIGHT) return;
    this.nextDirection = LEFT;
  }

  up() {
    if (this.direction === DOWN) return;
    this.nextDirection = UP;
  }

  down() {
    if (this.direction === UP) return;
    this.nextDirection = DOWN;
  }

  grow() {
    const lastCell = this.cells[this.cells.length - 1];
    this.cells.push(new SnakeCell(lastCell.x, lastCell.y));
  }

  getHead() {
    return this.cells[0];
  }

  getBody() {
    const cells = [...this.cells];
    cells.shift();
    return cells;
  }

  hasCollidedWithSelf() {
    return this._collision.hasCollided(this.getHead(), this.getBody());
  }

  hasGoneOutOfBounds() {
    return this._collision.hasGoneOutOfBounds(this.getHead());
  }

  deepCloneCells() {
    return JSON.parse(JSON.stringify(this.cells));
  }

  moveHead(){
    const directions = {
      [LEFT]: () => this.getHead().decrementX(),
      [RIGHT]: () => this.getHead().incrementX(),
      [UP]: () => this.getHead().decrementY(),
      [DOWN]: () => this.getHead().incrementY(),
    };

    directions[this.direction]();
  }

  move() {
    this.direction = this.nextDirection;
    const previousCells = this.deepCloneCells();

    this.moveHead();

    this.cells = this.cells.map((cell, i) => {
      const isHeadOfSnake = i === 0;
      if (isHeadOfSnake) return cell;

      const cellToUpdate = cell;
      const previousCell = previousCells[i - 1];
      cellToUpdate.x = previousCell.x;
      cellToUpdate.y = previousCell.y;

      return cellToUpdate;
    });
  }

  flash() {
    this.graphics.clear();
    setTimeout(() => this.draw(), 200);
    setTimeout(() => this.graphics.clear(), 400);
    setTimeout(() => this.draw(), 600);
    setTimeout(() => this.graphics.clear(), 800);
    setTimeout(() => this.draw(), 1000);
  }

  draw() {
    this.graphics.clear();
    this.graphics.beginFill(0xADFF2F);
    this.cells.forEach((cell) => {
      this.graphics.drawRect(cell.x * 11, cell.y * 11, 10, 10);
    });
  }
}
