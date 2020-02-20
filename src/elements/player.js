import { Game } from "../scenes/game";
import { Items } from "./items";
import { Menu } from "../scenes/menu";

export class Player {

    constructor(config = { width: 50, heigth: 50 }) {

        this.config = config;

        if (!this.config.animationsPath) {
            throw new Error('The parameter "animationsPath" is required to show PLAYER animations');
        }

        this.gravity = 0.24;

        this.audio = {
            sfx: {
                jump: {},
                gameOver: {}
            }
        };

        this.controllers = {
            jump: {
                up: {
                    speed: -7,
                    key: 'W',
                    angle: 90
                },
                upAndRight: {
                    speed: -10.5,
                    key: 'D',
                    angle: 120
                },
                upAndLeft: {
                    speed: -10.5,
                    key: 'A',
                    angle: 60
                }
            }
        };

        this.animations = {
            idle: {
                imgPath: `${this.config.animationsPath}/idle`,
                frames: 1,
                obj: null
            }
        };
    }

    preload() {

        // Animations
        this.animations.idle.obj = this.getAnimation('idle');
        this.animationJump = loadAnimation( 'assets/imgs/spritesheets/player/jump/1.png','assets/imgs/spritesheets/player/jump/2.png','assets/imgs/spritesheets/player/jump/3.png','assets/imgs/spritesheets/player/jump/4.png','assets/imgs/spritesheets/player/jump/7.png','assets/imgs/spritesheets/player/jump/8.png');
        this.animationJumpD = loadAnimation( 'assets/imgs/spritesheets/player/jumpD/1.png','assets/imgs/spritesheets/player/jumpD/2.png','assets/imgs/spritesheets/player/jumpD/3.png','assets/imgs/spritesheets/player/jumpD/4.png','assets/imgs/spritesheets/player/jumpD/5.png','assets/imgs/spritesheets/player/jumpD/6.png');
        this.animationJumpE = loadAnimation( 'assets/imgs/spritesheets/player/jumpE/1.png','assets/imgs/spritesheets/player/jumpE/2.png','assets/imgs/spritesheets/player/jumpE/3.png','assets/imgs/spritesheets/player/jumpE/4.png','assets/imgs/spritesheets/player/jumpE/5.png','assets/imgs/spritesheets/player/jumpE/6.png');
        this.animationIdle = loadAnimation( 'assets/imgs/spritesheets/player/idle/1.png','assets/imgs/spritesheets/player/idle/2.png','assets/imgs/spritesheets/player/idle/3.png');
        this.animationIdleD = loadAnimation( 'assets/imgs/spritesheets/player/idle/1d.png','assets/imgs/spritesheets/player/idle/2d.png','assets/imgs/spritesheets/player/idle/3d.png');
        this.animationDead = loadAnimation( 'assets/imgs/spritesheets/player/dead/1.png','assets/imgs/spritesheets/player/dead/2.png','assets/imgs/spritesheets/player/dead/3.png','assets/imgs/spritesheets/player/dead/4.png','assets/imgs/spritesheets/player/dead/5.png','assets/imgs/spritesheets/player/dead/6.png','assets/imgs/spritesheets/player/dead/7.png','assets/imgs/spritesheets/player/dead/8.png','assets/imgs/spritesheets/player/dead/9.png');
        this.animationDeadE = loadAnimation( 'assets/imgs/spritesheets/player/deadE/1.png','assets/imgs/spritesheets/player/deadE/2.png','assets/imgs/spritesheets/player/deadE/3.png','assets/imgs/spritesheets/player/deadE/4.png','assets/imgs/spritesheets/player/deadE/5.png','assets/imgs/spritesheets/player/deadE/6.png','assets/imgs/spritesheets/player/deadE/7.png','assets/imgs/spritesheets/player/deadE/8.png','assets/imgs/spritesheets/player/deadE/9.png');
       
        
        // Sound Effects
        this.audio.sfx.jump = loadSound('assets/audio/sfx/player/jump.wav');
        this.audio.sfx.gameOver = loadSound('assets/audio/sfx/player/gameover.wav');
    }

    load() {
        this.animationIdle.frameDelay = 21;
        this.animationIdleD.frameDelay = 21;
        this.animationJumpE.frameDelay = 8;
        this.animationJumpD.frameDelay = 8;
        this.animationDead.frameDelay = 12;
        this.animationDeadE.frameDelay = 12;
        this.animationJump.frameDelay = 12;

        this.sprite = createSprite(this.config.width, this.config.height);
        this.sprite.addAnimation('normal', this.animationIdle);
        this.sprite.addAnimation('normalD', this.animationIdleD);
        this.sprite.addAnimation('jumpE', this.animationJumpE);
        this.sprite.addAnimation('jumpD', this.animationJumpD);
        this.sprite.addAnimation('jump', this.animationJump);
        this.sprite.addAnimation('dead', this.animationDead);
        this.sprite.addAnimation('deadE', this.animationDeadE);
        this.sprite.setDefaultCollider();
    
    }

    /**
     * Draw
     *
     * @param   {Game}  scene  A scene object reference when this method is called
     *
     * @return  {void}
     */
    draw(scene) {

        this.sceneInteractions(scene);

        this.inputs(scene);
        
    }

    // touchEnded() {
    //     if (mouseY > this.sprite.position.y) {
    //         this.jump(this.controllers.jump.up);
    //     }
    // }

    /**
     * Check player interactions with a scene (limit bounds, spikes to death...)
     *
     * @param   {Game}  scene  scene  A scene object reference when this method is called
     *
     * @return  {void}
     */
    sceneInteractions(scene) {

        if (this.sprite.overlap(scene.platforms.walls)) {
            if (this.sprite.position.x < width / 2)
                this.sprite.velocity.x = 0.1;
            if (this.sprite.position.x > width / 2)
                this.sprite.velocity.x = -0.1;
        }

        if (this.sprite.overlap(scene.spines.sprite)) {
            

          this.gameOver(scene);
            
        }


        if (this.sprite.overlap(scene.newEnemy.enemyGroup)) {
           
          
                

            if(this.sprite.position.x < width/2){
              this.sprite.changeAnimation('deadE');
            }else{
            this.sprite.changeAnimation('dead');
            }
            this.gameOver(scene);
           
        }

        

        

        this.sprite.collide(scene.platforms.platformsGroup);
    }

    getAnimation(name = 'idle') {

        let lastFrame = this.animations[name].frames - 1;
        if (lastFrame < 10) {
            lastFrame = '0' + lastFrame;
        }

        let imgs = [
            `${this.animations.idle.imgPath}/${name}-00.png`
        ];

        if (this.animations[name].frames > 1) {
            imgs.push(`${this.animations.idle.imgPath}/${name}-${lastFrame}.png`);
        }

        return loadAnimation.apply({}, imgs);
    }

    /**
     * Verify the player input (keyboard, mouse, joystick...)
     *
     * @param  {Game}  scene  scene  A scene object reference when this method is called
     */
    inputs(scene) {

        let touchDistance = 0;

        if (this.sprite.overlap(scene.platforms.platformsGroup)) {

            if(this.sprite.position.x > (width/2)){
                this.sprite.changeAnimation('normalD');
            }else{
                this.sprite.changeAnimation('normal');
            }
           
            this.sprite.velocity.y = 0;

            if (scene.touched.x > 0 || scene.touched.y > 0) {
                touchDistance = dist(this.sprite.position.x, this.sprite.position.y, scene.touched.x, scene.touched.y);
            }

            if ((keyWentDown(this.controllers.jump.up.key) 
                && !keyWentDown(this.controllers.jump.upAndRight.key) 
                && !keyWentDown(this.controllers.jump.upAndLeft.key))) {

                this.jump(this.controllers.jump.up);
                this.sprite.changeAnimation('jump');
                
                // scene.touched.x = 0;
                // scene.touched.y = 0;

            }else if (this.sprite.position.x < (width / 2)) {

                if (keyWentDown(this.controllers.jump.upAndRight.key) || (touchDistance > 500 && scene.touched.x > this.sprite.position.x)) {
                    this.sprite.velocity.y += this.gravity;
                    this.jump(this.controllers.jump.upAndRight);
                    this.sprite.changeAnimation('jumpE');
                    
                    scene.touched.x = 0;
                    scene.touched.y = 0;
                }
            }else if (this.sprite.position.x > (width / 2)) {

                if (keyWentDown(this.controllers.jump.upAndLeft.key) || (touchDistance > 500 && scene.touched.x < this.sprite.position.x)) {
                    this.jump(this.controllers.jump.upAndLeft);
                    this.sprite.changeAnimation('jumpD');

                    scene.touched.x = 0;
                    scene.touched.y = 0;
                }
            }

        } else {
            this.sprite.velocity.y += this.gravity;
        }
    }

    /**
     * Jump action. Can be many types
     *
     * @param   {object}  config  Config of a jump type (up, upAndRight...)
     *
     * @return  {void}
     */
    jump(config = { speed: 0, key: '', angle: 0 }) {
        this.sprite.addSpeed(config.speed, config.angle);
        this.audio.sfx.jump.play();
    }

    gameOver(scene){
        this.sprite.setCollider('circle', 0,0,0);
        this.audio.sfx.gameOver.play();
        scene.hud.gameOver({
            onFinish: () => {
                //scene.sceneManager.showScene(Menu);
                location.reload();
            }
        });

        //this.sceneManager.showScene(Game, this.sceneArgs);
        print("gameover");
    }
}