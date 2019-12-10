export class Player {
    
    constructor(config = { width: 50, heigth: 50 }) {
        this.config = config;
        this.animations = {
            idle: {
                imgPath: `${this.config.animationsPath}/idle`,
                frames: 1,
                obj: null
            }
        };
    }

    preload() {
        this.animations.idle.obj = this.getAnimation('idle');
    }

    load() {
        this.sprite = createSprite(this.config.width, this.config.heigth);

        this.sprite.addAnimation('idle', this.animations.idle.obj);
        this.sprite.setDefaultCollider(); 
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
}