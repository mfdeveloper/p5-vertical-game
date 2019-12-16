import 'p5.play'
import { Player } from "../elements/player";
import { Platforms } from "../elements/platforms";
import { Item } from "../elements/item";
import { Items } from '../elements/items';
import { Hud } from '../elements/ui/hud';

export class Game {

    constructor() {

        this.player = new Player({
            width: 50,
            height: height - 300,
            animationsPath: 'assets/imgs/spritesheets/player'
        });

        
        this.hud = new Hud({
            score: {
                label: 'Salsichas',
                width: 20,
                height: 20
            },
            timer: {
                label: 'Tempo',
                width: 150,
                height: 20
            }
        });

        this.items = new Items({
            onCollect: () => {
                this.hud.scoreValue++
            }
        });

        this.spines = {
            img: {},
            sprite: null
        }

    }

    preload() {

        this.backgroundImg = loadImage('assets/imgs/scenario/bg-main.png');
        this.spines.img = loadImage('assets/imgs/scenario/spines.png');

        this.platforms = new Platforms();

        this.player.preload();
        this.platforms.preload();
        this.items.preload();
    }

    setup() {

        this.player.load();
        this.items.load();

        this.platforms.drawWalls();
        this.platforms.draw();

        this.spines.sprite = createSprite(200, height - 30);
        this.spines.sprite.addImage(this.spines.img);
        this.spines.sprite.setDefaultCollider();

        camera.position.y = this.spines.sprite.position.y + 600;
        camera.position.x = width / 2;
    }

    draw() {
        background(this.backgroundImg);

        this.hud.showScore();
        this.hud.showTimer();

        this.player.draw(this);
        this.platforms.changeConfig(this.sceneArgs);

        this.items.checkCollect(this.player)
                  .changeConfig(this.sceneArgs);

        this.spines.sprite.velocity.y = -0.2;
        camera.position.y = this.spines.sprite.position.y + 600;

        this.spines.sprite.overlap(this.platforms.platformsGroup, (spines, platforms) => {
            platforms.remove();
        });

        drawSprites();
    }
}