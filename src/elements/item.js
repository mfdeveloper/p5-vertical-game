import { Player } from "./player";

export class Item {

    constructor(config = {
        x: 50,
        y: 0,
        animation: { name: '', frames: 0 }
    }) {

        if (!Item.group) {
            Item.group = new Group();
        }

        this.config = config;

        if (!Item.onCollect) {
            
            Item.onCollect = (player, item) => {};
        }

        const animationParams = [
            config.animation.name
        ].concat(config.animation.frames);

        this.sprite = createSprite(config.x, config.y);
        this.sprite.addAnimation.apply(this.sprite, animationParams);
        this.sprite.setDefaultCollider();

        Item.group.add(this.sprite);
    }

    get group() {
        return Item.group;
    }

    static preload() {

        if (!Item.audio) {

            Item.audio = {
                sfx: {
                    collect: {}
                }
            };
        }
        
        Item.audio.sfx.collect = loadSound('assets/audio/sfx/item/sausage.wav');
    }

    /**
     * Get items and update score
     *
     * @param   {Player}  player  The player when trigger an item sprite
     *
     * @return  {void}
     */
    checkCollect(player) {
        player.sprite.overlap(this.group, this.doCollect);
    }

    doCollect(player, item) {
        //collector is another name for asterisk
        //show the animation
        player.changeAnimation('stretch');
        player.animation.rewind();
        //collected is the sprite in the group collectibles that triggered
        //the event
        item.remove();

        if (Item.audio && Item.audio.sfx) {
            
            Item.audio.sfx.collect.play();
        }

        if (typeof Item.onCollect == 'function') {
            Item.onCollect(player, item);
        }
    }
}