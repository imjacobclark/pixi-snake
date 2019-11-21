export default class Food {
    constructor(x, y, graphics) {
        this.x = x;
        this.y = y;
        this.graphics = graphics;
    }

    getGraphics() {
        return this.graphics;
    }

    randomlyReposition(maxWidth, maxHeight){
        this.x = Math.round(Math.random() * maxWidth);
        this.y = Math.round(Math.random() * maxHeight);
    }

    draw() {
        this.graphics.clear();
        this.graphics.beginFill(0xFFFFFF);
        this.graphics.drawRect(this.x * 11, this.y * 11, 10, 10);
    }
}
