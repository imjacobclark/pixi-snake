import Cell from './Cell.js';

const UP = "up";
const DOWN = "down";
const RIGHT = "right";
const LEFT = "left";
const DEFAULT_DIRECTION = RIGHT;

export default class Snake {
    constructor(graphics) {
        this.cells = [
            new Cell(0, 0),
            new Cell(0, 1),
            new Cell(0, 2),
            new Cell(0, 3),
            new Cell(0, 4)
        ];

        this.direction = DEFAULT_DIRECTION;
        this.graphics = graphics;
    }

    getGraphics(){
        return this.graphics;
    }

    right(){
        if(this.direction === LEFT) return;
        this.direction = RIGHT;
    }

    left() {
        if (this.direction === RIGHT) return;
        this.direction = LEFT;
    }

    up() {
        if (this.direction === DOWN) return;
        this.direction = UP;
    }

    down() {
        if (this.direction === UP) return;
        this.direction = DOWN;
    }

    grow() {
        const lastCell = this.cells[this.cells.length - 1];
        this.cells.push(new Cell(lastCell.x, lastCell.y))
    }

    deepCloneCells(){
        return JSON.parse(JSON.stringify(this.cells));
    }

    move(){
        const previousCells = this.deepCloneCells();

        const keyMap = {
            [LEFT]: () => this.cells[0].decrementX(),
            [RIGHT]: () => this.cells[0].incrementX(),
            [UP]: () => this.cells[0].decrementY(),
            [DOWN]: () => this.cells[0].incrementY()
        }

        keyMap[this.direction]();

        this.cells = this.cells.map((cell, i) => {
            if(i === 0) return cell;

            cell.x = previousCells[i-1].x
            cell.y = previousCells[i-1].y

            return cell;
        });
    }

    draw(){
        this.graphics.clear();
        this.graphics.beginFill(0xFFFFFF);
        this.cells.forEach(cell => {
            this.graphics.drawRect(cell.x * 11, cell.y * 11, 10, 10);
        });
    }
}