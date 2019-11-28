export default class Cell {
    constructor(x, y) {
        this.x = x;
        this.y = y;
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
