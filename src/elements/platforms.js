export class Platforms {

    constructor() {
        this.platformsGroup = this.walls = new Group();
        this.img = {};
    }

    preload() {
        this.img = loadImage('assets/imgs/objects/platform.png');
        this.imgWall = loadImage('assets/imgs/objects/wall.png');
    }

    draw() {
        var platform1 = createSprite(50, height - 200);
        platform1.addImage(this.img);
        platform1.setDefaultCollider();
        this.platformsGroup.add(platform1);

        var platform2 = createSprite(width - 50, height - 325);
        platform2.addImage(this.img);
        platform2.setDefaultCollider();
        this.platformsGroup.add(platform2);

        var platform3 = createSprite(50, height - 450);
        platform3.addImage(this.img);
        platform3.setDefaultCollider();
        this.platformsGroup.add(platform3);

        var platform4 = createSprite(width - 50, height - 575);
        platform4.addImage(this.img);
        platform4.setDefaultCollider();
        this.platformsGroup.add(platform4);
    }

    drawWalls() {

        var wall1 = createSprite(1, width / 2);
        wall1.addImage(this.imgWall);
        wall1.setDefaultCollider();
        this.walls.add(wall1);
        
        var wall2 = createSprite(width - 1, height / 2);
        wall2.addImage(this.imgWall);
        wall2.setDefaultCollider();
        this.walls.add(wall2);
    }

    changeConfig(config = { showColliders: false }) {

        this.platformsGroup.forEach(platform => {
            platform.debug = config.showColliders;
        });

        this.walls.forEach(wall => {
            wall.debug = config.showColliders;
        });
    }
}