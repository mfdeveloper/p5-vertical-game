import 'p5.play'
import { Player } from "../elements/player";
import { Platforms } from "../elements/platforms";
import { Items } from '../elements/items';
import { Hud } from '../elements/ui/hud';
import { Enemy } from '../elements/enemy';

export class Game {

    constructor() {

        this.touched = {
            x: 0,
            y: 0
        };

        this.swipe = {
            x: 0,
            y: 0
        };

        this.player = new Player({
            width: 50,
            height: height + (height / 2) - 100,
            animationsPath: 'assets/imgs/spritesheets/player'
        });

        this.hud = new Hud({
            score: {
                label: '',
                width: 73,
                height: 13
            },
            timer: {
                label: '',
                width: 280,
                height: 13
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


        ///////////////////////////////
        this.newEnemy = new Enemy();

        ////////////////////////////
    }

    preload() {

        this.backgroundImg = loadImage('assets/imgs/scenario/back.jpg');
        this.spines.img = loadImage('assets/imgs/scenario/spines.png');

        this.platforms = new Platforms();

        this.player.preload();
        this.platforms.preload();
        this.items.preload();
        this.newEnemy.preload();
    }

    setup() {

        if (this.sceneArgs.btnPressed) {
            delete this.sceneArgs.btnPressed;
        }

        this.hud.setup();

        var fundoImagem = createSprite(width / 2, 1);
        fundoImagem.addImage(this.backgroundImg);
        this.player.load();
        this.items.load();

        this.newEnemy.createEnemy();

        this.platforms.drawWalls();
        this.platforms.draw();

        this.spines.sprite = createSprite(200, height + (height - 50));
        this.spines.sprite.addImage(this.spines.img);
        this.spines.sprite.setDefaultCollider();

        //camera.position.y = this.spines.sprite.position.y + 600;
        camera.position.y = this.spines.sprite.position.y - ((height / 2) - 25);
        camera.position.x = width / 2;
    }

    draw() {
        //background("red");

        let self = this;
        this.hud.showScore();
        this.hud.showTimer();

        this.newEnemy.moveEnemy();

        this.player.draw(this);
        this.platforms.changeConfig(this.sceneArgs);

        this.player.sprite.overlap(this.platforms.platformsGroup, (collector, platform) => {
            this.platforms.plataformD(collector, platform, self);
        });

        this.newEnemy.moveEnemy(this.player.sprite.position.x, this.player.sprite.position.y);

        this.items.checkCollect(this.player)
            .changeConfig(this.sceneArgs);


        this.spines.sprite.velocity.y = -1.3;
        camera.position.y = this.spines.sprite.position.y - ((height / 2) + 50);
        this.platforms.moveWalls(this.spines.sprite.velocity.y);

        this.spines.sprite.overlap(this.platforms.platformsGroup, (spines, platforms) => {
            platforms.remove();
        });

        drawSprites();
    }

    /**
     * Touch end event callback
     *
     * @param   {TouchEvent}  event  An touch event object with touched target
     *
     * @return  {[type]}         [return description]
     */
    touchEnded(event, scene) {

        if ((!this.sceneArgs.btnPressed) && (this.swipe.x == 0 && this.swipe.y == 0)) {
            
            this.touched.x = mouseX;
            this.touched.y = mouseY;
        }
        
        // Prevent default mouse behaviour
        return false;
    }
    
    /**
     * @todo Store start and endPos information to detect if a swipe or tap
     */
    // touchMoved() {
    //     this.swipe.x = mouseX;
    //     this.swipe.y = mouseY;
        
    //     // Prevent default mouse behaviour
    //     return false;
    // }

}