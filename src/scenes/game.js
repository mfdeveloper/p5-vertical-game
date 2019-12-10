 import 'p5.play'
 import { Player } from "../elements/player";

export class Game {

    constructor() {
        this.player = new Player({
            width: 50,
            height: height - 300,
            animationsPath: 'assets/imgs/spritesheets/player'
        });
    }

    preload() {

        this.player.preload();
    }

    setup() {
        this.sceneArgs.backgroundColor = 'white';
        this.player.load();
    }

    draw() {
         
        this.player.sprite.debug = this.sceneArgs.showColliders;

        background(this.sceneArgs.backgroundColor);
        drawSprites();
    }
}