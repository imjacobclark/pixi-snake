import { RUNNING } from './Status';

import * as speechCommands from '@tensorflow-models/speech-commands';

export default class Controls {
  constructor(snake, gameStatus) {
    this.snake = snake;
    this.gameStatus = gameStatus;
  }

  create() {
    return new Promise((resolve, reject) => {
      const pauseOrResumeGame = () => {
        if (this.gameStatus.status === RUNNING) {
          this.gameStatus.setPaused();
        } else {
          this.gameStatus.setRunning();
        }
      }

      document.addEventListener('keydown', (e) => {
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
  
        if (e.keyCode === 32) {
          pauseOrResumeGame();
        }
      });
  
      const handleVisibilityChange = () => {
        pauseOrResumeGame();
      }
  
      document.addEventListener('webkitvisibilitychange', handleVisibilityChange);
      document.addEventListener('visibilitychange', handleVisibilityChange);
  
      const recognizer = speechCommands.create("BROWSER_FFT");
      recognizer.ensureModelLoaded().then(() => {
        const words = recognizer.wordLabels();
  
        recognizer.listen(result => {
          for (let i = 0; i < words.length; ++i) {
            if(result.scores[i] > 0.8) {
              console.log(words[i])
              switch(words[i]){
                case 'up':
                  this.snake.up();
                  break;
                case 'right':
                  this.snake.right();
                  break;
                case 'down':
                  this.snake.down();
                  break;
                case 'left':
                  this.snake.left();
                  break;
              }
            }
          }
        }, 
        {
          includeSpectrogram: true,
          probabilityThreshold: 0.75
        });

        resolve();
      });

    });
  }
}
