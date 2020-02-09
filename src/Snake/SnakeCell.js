import Cell from '../Game/Cell.js';

export default class SnakeCell extends Cell {
    constructor(x, y) {
        super(x, y);
    }

    incrementX(){
        this.x = this.x + 1;
    }

    decrementX() {
        this.x = this.x - 1;
    }

    incrementY() {
        this.y = this.y + 1;
    }

    decrementY() {
        this.y = this.y - 1;
    }
}
