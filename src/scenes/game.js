import 'p5.play'
import { Player } from "../elements/player";
import { Platforms } from "../elements/platforms";
import { Items } from '../elements/items';
import { Hud } from '../elements/ui/hud';
import { Enemy } from '../elements/enemy';

export class Game {

    constructor() {
        
        this.player = new Player({
            width: 50,
            height: height + (height/2) - 100,
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
   var newEnemy;
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

        var fundoImagem = createSprite(width / 2, 1);
        fundoImagem.addImage(this.backgroundImg);

        this.hud.load();

        this.player.load();
        this.items.load();
            
        this.newEnemy.createEnemy();
        


        this.platforms.drawWalls();
        this.platforms.draw();
        
        this.spines.sprite = createSprite(200,  height + (height -50));
        this.spines.sprite.addImage(this.spines.img);
        this.spines.sprite.setDefaultCollider();

        //camera.position.y = this.spines.sprite.position.y + 600;
        camera.position.y = this.spines.sprite.position.y -((height/2) -25);
        camera.position.x = width / 2;

     
    }

    draw() {
        //background("red");
        // background(this.backgroundImg);

        let self = this;
        this.hud.showScore();
        this.hud.showTimer();


        this.newEnemy.moveEnemy();
        

        this.player.draw(this);
        this.platforms.changeConfig(this.sceneArgs);
       
      
        
        this.player.sprite.overlap(this.platforms.platformsGroup, (collector, platform) => {
            this.platforms.plataformD(collector, platform, self);
        });

        this.newEnemy.moveEnemy(this.player.sprite.position.x,this.player.sprite.position.y);

        this.items.checkCollect(this.player)
                  .changeConfig(this.sceneArgs);

       
        this.spines.sprite.velocity.y = -1.3;
       camera.position.y = this.spines.sprite.position.y -((height/2) + 50);
                    this.platforms.moveWalls(this.spines.sprite.velocity.y);

        this.spines.sprite.overlap(this.platforms.platformsGroup, (spines, platforms) => {
            platforms.remove();
        });

        drawSprites();
        
    }
    
}