export default class Controls {
    constructor(snake) {
        this.snake = snake;
    }

    create(){
        document.addEventListener('keydown', e => {
            if (e.keyCode === 38 || e.keyCode === 87 || e.keyCode === 90) {
                this.snake.up();
            }
            
            if (e.keyCode === 39 || e.keyCode === 68) {
                this.snake.right();
            }
            
            if (e.keyCode === 40 || e.keyCode === 83) {
                this.snake.down();
            }

            if (e.keyCode === 37 || e.keyCode === 65 || e.keyCode === 81) {
                this.snake.left();
            }
        })
    }
}
