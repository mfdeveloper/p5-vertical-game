export class Player {
    
    constructor(config = { width: 50, heigth: 50 }) {
        
        this.config = config;

        this.gravity = 0.24;
        this.audio = {
            sfx: {
                jump: {},
                gameOver: {}
            }
        };

        this.controllers = {
            jump: {
                speed: -10,
                key: 'W',
                angle: 90
            }
        };

        if (!this.config.animationsPath) {
            throw new Error('The parameter "animationsPath" is required to show PLAYER animations');
        }

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

        // Sound Effects
        // this.audio.sfx.jump = loadSound('assets/audio/sfx/player/jump.wav');
        // this.audio.sfx.gameOver = loadSound('assets/audio/sfx/player/gameover.wav');
    }

    load() {
        this.sprite = createSprite(this.config.width, this.config.height);

        this.sprite.addAnimation('idle', this.animations.idle.obj);
        this.sprite.setDefaultCollider();
    }

    draw() {
        this.sprite.velocity.y += this.gravity;

        this.inputs();
    }

    touchEnded() {
        if (mouseY > this.sprite.position.y) {
            this.jump();
        }
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

    inputs() {

        if(keyWentDown(this.controllers.jump.key)){
           this.jump();
        }
    }

    jump() {
        this.sprite.addSpeed(this.controllers.jump.speed, this.controllers.jump.angle); 
        this.audio.sfx.jump.play();
    }
}