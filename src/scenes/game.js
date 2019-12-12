 import 'p5.play'
 import { Player } from "../elements/player";
 import { Platforms } from "../elements/platforms";

export class Game {

    constructor() {
        this.player = new Player({
            width: 50,
            height: height - 300,
            animationsPath: 'assets/imgs/spritesheets/player'
        });
    }

    preload() {

        this.backgroundImg = loadImage('assets/imgs/scenario/bg-main.png');

        this.platforms = new Platforms();
        
        this.player.preload();
        this.platforms.preload();
    }

    setup() {

        this.player.load();
        
        camera.position.y = height - 50; 
        camera.position.x = width / 2;

        this.platforms.drawWalls();
        this.platforms.draw();

    }

    draw() {
        background(this.backgroundImg);
         
        this.player.draw(this.sceneArgs);
        this.platforms.changeConfig(this.sceneArgs)

        drawSprites();
    }
}