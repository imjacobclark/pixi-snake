import * as PIXI from 'pixi.js-legacy';
import * as PIXISound from 'pixi-sound';

import Snake from './Snake/Snake';
import Food from './Food/Food';
import Controls from './Game/Controls';
import Text from './Game/Text';
import Collision from './Collision/Collision';
import { Status, RUNNING } from './Game/Status';
import App from './App';

alert('welcome')

window.PIXI = PIXI;
window.PIXISound = PIXISound;
window.window.PIXI.sound = PIXISound.default;

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

const ONE_BLOCK_IN_PIXELS = 10;
const SCREEN_OUT_OF_BOUNDS_OFFSET = 1;

const MAXIMUM_X_GRID_POSITIONS = windowWidth / (ONE_BLOCK_IN_PIXELS + SCREEN_OUT_OF_BOUNDS_OFFSET);
const MAXIMUM_Y_GRID_POSITIONS = windowHeight / (ONE_BLOCK_IN_PIXELS + SCREEN_OUT_OF_BOUNDS_OFFSET);

const DIED_SOUND = window.PIXI.sound.Sound.from('./resources/sounds/died.mp3');
const EAT_SOUND = window.PIXI.sound.Sound.from('./resources/sounds/eat.mp3');

const collision = new Collision(windowWidth, windowHeight);
const snake = new Snake(new window.PIXI.Graphics(), collision);

const food = new Food(20, 20, new window.PIXI.Graphics());

const status = new Status(new window.PIXI.Graphics(), new Text('', windowHeight - 30, 20));

new Controls(snake, status).create();

const snakeApplication = new App(windowWidth, windowHeight);

// snakeApplication.ticker.add(() => {
//   if (status.status !== RUNNING) return;

//   if (snake.hasCollidedWithSelf() || snake.hasGoneOutOfBounds()) {
//     DIED_SOUND.play();
//     snake.flash();
//     status.setLost();

//     return;
//   }

//   if (collision.hasCollided(snake.getHead(), food)) {
//     EAT_SOUND.play();
//     snake.grow();
//     food.randomlyReposition(MAXIMUM_X_GRID_POSITIONS, MAXIMUM_Y_GRID_POSITIONS);
//   }

//   snake.move();

//   [snake, food, status].forEach(f => f.draw());
// });

snakeApplication.stage.addChild(snake.graphics);
snakeApplication.stage.addChild(food.graphics);
snakeApplication.stage.addChild(status.graphics);

document.getElementById("snake__game").appendChild(snakeApplication.view);