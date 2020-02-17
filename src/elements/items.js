import { Item } from "./item";
import { Player } from "./player";

export class Items {

    constructor(events = {
        onCollect: () => {}
    }) {
        Item.onCollect = events.onCollect;
    }

    preload() {
        Item.preload();
       
    }

    load() {

        const animation = {
            name: 'normal',
            frames: ['assets/imgs/items/sausage-00.png', 'assets/imgs/items/sausage-01.png', 'assets/imgs/items/sausage-02.png', 'assets/imgs/items/sausage-03.png', 'assets/imgs/items/sausage-02.png','assets/imgs/items/sausage-01.png','assets/imgs/items/sausage-00.png']
        };

        this.items = [
            new Item({
                x: 50,
                y: height + (height/2) - 440,
                animation: animation
            }),
            new Item({
                x: 50,
                y: height + (height/2) - 680,
                animation: animation
            }),
           
            new Item({
                x: width - 30,
                y: height + (height/2) - 560,
                animation: animation
        
            }),
               

            new Item({
                x: width - 30,
                y: height + (height/2) - 780,
                animation: animation
            }),
            
         
         
            new Item({
                x: 50,
                y: height  + (height/2) - 800,
                animation: animation
            }),

            new Item({
                x: width - 30,
                y: height  + (height/2) - 1150,
                animation: animation
            }),
          
            new Item({
                x: 50,
                y: height  + (height/2) - 1250,
                animation: animation
            }),

            new Item({
                x: width - 30,
                y: height   + (height/2) - 1380,
                animation: animation
            }),
          
        

            new Item({
                x: width - 30,
                y: height  + (height/2) - 1630,
                animation: animation
            }),
          
            new Item({
                x: 50,
                y: height  + (height/2) - 1970,
                animation: animation
            }),

            new Item({
                x: width - 30,
                y: height   + (height/2)- 2080,
                animation: animation
            }),



            new Item({
                x: 50,
                y: height   + (height/2) - 2230,
                animation: animation
            }),

            new Item({
                x: width - 30,
                y: height  + (height/2) - 2350,
                animation: animation
            }),


            new Item({
                x: 50,
                y: height  + (height/2) - 2700,
                animation: animation
            }),

        ];
    }

    get group() {
        return Item.group || this.items[0].group;
    }

    /**
     * Get items and update score
     *
     * @param   {Player}  player  The player when trigger an item sprite
     *
     * @return  {Items}
     */
    checkCollect(player) {
        player.sprite.overlap(this.group, Item.prototype.doCollect);

        return this;
    }

    changeConfig(config = { showColliders: false }) {

        this.group.forEach(item => {
            item.debug = config.showColliders;
        });
    }
}