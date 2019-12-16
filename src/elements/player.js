import { Game } from "../scenes/game";
import { Items } from "./items";

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
                    speed: -10,
                    key: 'W',
                    angle: 90
                },
                upAndRight: {
                    speed: -10,
                    key: 'D',
                    angle: 120
                },
                upAndLeft: {
                    speed: -10,
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

        // Sound Effects
        this.audio.sfx.jump = loadSound('assets/audio/sfx/player/jump.wav');
        this.audio.sfx.gameOver = loadSound('assets/audio/sfx/player/gameover.wav');
    }

    load() {
        this.sprite = createSprite(this.config.width, this.config.height);


        this.sprite.addAnimation('idle', this.animations.idle.obj);
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

    touchEnded() {
        if (mouseY > this.sprite.position.y) {
            this.jump(this.controllers.jump.up);
        }
    }

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
            this.audio.sfx.gameOver.play();
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

        if (this.sprite.overlap(scene.platforms.platformsGroup)) {

            this.sprite.velocity.y = 0;

            if (keyWentDown(this.controllers.jump.up.key)) {
                this.jump(this.controllers.jump.up);
            }

            if (this.sprite.position.x < (width / 2)) {

                if (keyWentDown(this.controllers.jump.upAndRight.key)) {
                    this.sprite.velocity.y += this.gravity;
                    this.jump(this.controllers.jump.upAndRight);
                }
            }

            if (this.sprite.position.x > (width / 2)) {

                if (keyWentDown(this.controllers.jump.upAndLeft.key)) {
                    this.jump(this.controllers.jump.upAndLeft);
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
}