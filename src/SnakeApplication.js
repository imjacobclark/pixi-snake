export default class SnakeApplication {
    constructor() {
        this.pixiApplication = new PIXI.Application({
            width: window.innerWidth,
            height: window.innerHeight,
            antialias: true,
            transparent: false,
            resolution: 1
        });
    }

    get view() {
        return this.pixiApplication.view;
    }

    get stage() {
        return this.pixiApplication.stage;
    }

    get renderer() {
        return this.pixiApplication.renderer;
    }

    get ticker() {
        return this.pixiApplication.ticker;
    }
}