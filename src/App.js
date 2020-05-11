export default class App {
  constructor(windowWidth, windowHeight) {
    this.app = new window.PIXI.Application({
      width: windowWidth,
      height: windowHeight,
      antialias: true,
      transparent: true,
      resolution: 1,
      forceCanvas: true
    });
    
    this.app.ticker.maxFPS = 1;
  }

  get ticker() {
    return this.app.ticker;
  }

  get stage() {
    return this.app.stage;
  }

  get view() {
    return this.app.view;
  }
}
