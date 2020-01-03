import { Hud } from "./ui/hud";
import { Menu } from "../scenes/menu";

export class Platforms {

    constructor() {
        this.platformsGroup = new Group();
        this.platformsGroup2 = new Group();
        this.walls = new Group();
        this.img1 = {};
        this.img2 = {};
        this.img3 = {};
        this.imgWall = {};
        this.wall1 = {};
        this.wall2 = {};

    }

    preload() {
        this.img1 = loadImage('assets/imgs/objects/plat_01.png');
        this.img2 = loadImage('assets/imgs/objects/plat_DE.png');
        
        this.animationBeer = loadAnimation( 'assets/imgs/items/br_1.png','assets/imgs/items/br_2.png','assets/imgs/items/br_3.png','assets/imgs/items/br_4.png','assets/imgs/items/br_5.png','assets/imgs/items/br_6.png');
        this.imgBeer = loadImage('assets/imgs/items/br_1.png');
        this.imgWall = loadImage('assets/imgs/objects/wall.png');
        this.animationBeer.frameDelay = 20;
      
        this.audioBeer = loadSound('assets/audio/sfx/player/beer.mp3');
    }

    draw() {

        var beer = createSprite(200,height + ((height/2) - 3300));
        //beer.addImage("beer",this.imgBeer);
        beer.setCollider("rectangle", -15,50, 100, 100);
        beer.addAnimation('beer', this.animationBeer);
        beer.changeAnimation('beer'); 
        beer.debug = true;
        this.platformsGroup.add(beer);

        var platform1 = createSprite(35, height + (height/2));
        platform1.addImage(this.img1);
        //platform1.setCollider("rectangle", 0,-25, 75, 3);
        platform1.setDefaultCollider();
        this.platformsGroup.add(platform1);

        var platform2 = createSprite(width - 35, height + ((height/2) - 115));
        platform2.addImage("pDown",this.img2);
        platform2.mirrorX(-1);
        platform2.setDefaultCollider();
        this.platformsGroup.add(platform2);

        var platform3 = createSprite(35, height +  ((height/2) - 235) );
        platform3.addImage(this.img1);
        platform3.setDefaultCollider();
        this.platformsGroup.add(platform3);

        var platform4 = createSprite(width - 35,  height +((height/2) - 355) );
        platform4.addImage("pDown",this.img2);
        platform4.mirrorX(-1);
        platform4.setDefaultCollider();
        this.platformsGroup.add(platform4);

        var platform5 = createSprite( 35, height + ((height/2) - 475) );
        platform5.addImage(this.img1);
        platform5.setDefaultCollider();
        this.platformsGroup.add(platform5);

        var platform6 = createSprite( width - 35, height + ((height/2) - 595) );
        platform6.addImage(this.img1);
        platform6.mirrorX(-1);    
        platform6.setDefaultCollider();
        this.platformsGroup.add(platform6);

        var platform7 = createSprite(35, height + ((height/2) - 715) );
        platform7.addImage("pDown",this.img2);
        platform7.setDefaultCollider();
        this.platformsGroup.add(platform7);


        
        var platform8 = createSprite( width - 35, height + ((height/2) - 835) );
        platform8.addImage(this.img1);
        platform8.mirrorX(-1);
        platform8.setDefaultCollider();
        this.platformsGroup.add(platform8);

        var platform9 = createSprite(  35, height + ((height/2) - 955) );
        platform9.addImage(this.img1);
        platform9.setDefaultCollider();
        this.platformsGroup.add(platform9);


        var platform9 = createSprite( width - 35, height + ((height/2) - 1075) );
        platform9.addImage(this.img1);
        platform9.mirrorX(-1);
        platform9.setDefaultCollider();
        this.platformsGroup.add(platform9);

        var platform10 = createSprite(  35, height + ((height/2) - 1195) );
        platform10.addImage("pDown",this.img2);
        platform10.setDefaultCollider();
        this.platformsGroup.add(platform10);


        var platform11 = createSprite( width - 35, height + ((height/2) - 1315) );
        platform11.addImage(this.img1);
        platform11.mirrorX(-1);
        platform11.setDefaultCollider();
        this.platformsGroup.add(platform11);


        var platform12 = createSprite(  35, height + ((height/2) - 1435) );
        platform12.addImage(this.img1);
        platform12.setDefaultCollider();
        this.platformsGroup.add(platform12);

        var platform13 = createSprite( width - 35, height + ((height/2) - 1555) );
        platform13.addImage("pDown",this.img2);
        platform13.mirrorX(-1);
        platform13.setDefaultCollider();
        this.platformsGroup.add(platform13);

        var platform14 = createSprite(  35, height + ((height/2) - 1675) );
        platform14.addImage(this.img1);
        platform14.setDefaultCollider();
        this.platformsGroup.add(platform14);


        var platform15 = createSprite( width - 35, height + ((height/2) - 1795) );
        platform15.addImage(this.img1);
        platform15.mirrorX(-1);
        platform15.setDefaultCollider();
        this.platformsGroup.add(platform15);

        var platform16 = createSprite(  35, height + ((height/2) - 1915) );
        platform16.addImage(this.img1);
        platform16.setDefaultCollider();
        this.platformsGroup.add(platform16);


        var platform17 = createSprite( width - 35, height + ((height/2) - 2035) );
        platform17.addImage(this.img1);
        platform17.mirrorX(-1);
        platform17.setDefaultCollider();
        this.platformsGroup.add(platform17);


        var platform18 = createSprite(  35, height + ((height/2) - 2155) );
        platform18.addImage("pDown",this.img2);
        platform18.setDefaultCollider();
        this.platformsGroup.add(platform18);


        var platform19 = createSprite( width - 35, height + ((height/2) - 2275) );
        platform19.addImage(this.img1);
        platform19.mirrorX(-1);
        platform19.setDefaultCollider();
        this.platformsGroup.add(platform19);

        var platform20 = createSprite(  35, height + ((height/2) - 2395) );
        platform20.addImage(this.img1);
        platform20.setDefaultCollider();
        this.platformsGroup.add(platform20);

        var platform21 = createSprite( width - 35, height + ((height/2) - 2515) );
        platform21.addImage(this.img1);
        platform21.mirrorX(-1);
        platform21.setDefaultCollider();
        this.platformsGroup.add(platform21);

        var platform22 = createSprite(  35, height + ((height/2) - 2635) );
        platform22.addImage(this.img1);
        platform22.setDefaultCollider();
        this.platformsGroup.add(platform22);

        var platform23 = createSprite( width - 35, height + ((height/2) - 2755) );
        platform23.addImage("pDown",this.img2);
        platform23.mirrorX(-1);
        platform23.setDefaultCollider();
        this.platformsGroup.add(platform23);


        var platform24 = createSprite(  35, height + ((height/2) - 2875) );
        platform24.addImage(this.img1);
        platform24.setDefaultCollider();
        this.platformsGroup.add(platform24);

        var platform25 = createSprite( width - 35, height + ((height/2) - 2995) );
        platform25.addImage("pDown",this.img2);
        platform25.mirrorX(-1);
        platform25.setDefaultCollider();
        this.platformsGroup.add(platform25);

/*
        
        var platform26 = createSprite(  35, height + ((height/2) - 3235) );
        platform26.addImage(this.img1);
        platform26.setDefaultCollider();
        this.platformsGroup.add(platform26);

        var platform27 = createSprite( width - 35, height + ((height/2) - 3355) );
        platform27.addImage(this.img1);
        platform27.mirrorX(-1);
        platform27.setDefaultCollider();
        this.platformsGroup.add(platform27);

        var platform28 = createSprite(  35, height + ((height/2) - 3475) );
        platform28.addImage(this.img1);
        platform28.setDefaultCollider();
        this.platformsGroup.add(platform28);

        var platform29 = createSprite( width - 35, height + ((height/2) - 3595) );
        platform29.addImage(this.img1);
        platform29.mirrorX(-1);
        platform29.setDefaultCollider();
        this.platformsGroup.add(platform29);

        var platform30 = createSprite(  35, height + ((height/2) - 3715) );
        platform30.addImage(this.img1);
        platform30.setDefaultCollider();
        this.platformsGroup.add(platform30);

        var platform31 = createSprite( width - 35, height + ((height/2) - 3835) );
        platform31.addImage(this.img1);
        platform31.mirrorX(-1);
        platform31.setDefaultCollider();
        this.platformsGroup.add(platform31);


        
        var platform32 = createSprite(  35, height + ((height/2) - 3955) );
        platform32.addImage(this.img1);
        platform32.setDefaultCollider();
        this.platformsGroup.add(platform32);

        var platform33 = createSprite( width - 35, height + ((height/2) - 4075) );
        platform33.addImage(this.img1);
        platform33.mirrorX(-1);
        platform33.setDefaultCollider();
        this.platformsGroup.add(platform33);


        
        var platform34 = createSprite(  35, height + ((height/2) - 4195) );
        platform34.addImage(this.img1);
        platform34.setDefaultCollider();
        this.platformsGroup.add(platform34);


        var platform35 = createSprite( width - 35, height + ((height/2) - 4315) );
        platform35.addImage(this.img1);
        platform35.mirrorX(-1);
        platform35.setDefaultCollider();
        this.platformsGroup.add(platform35);


         
        var platform36 = createSprite(  35, height + ((height/2) - 4435) );
        platform36.addImage(this.img1);
        platform36.setDefaultCollider();
        this.platformsGroup.add(platform36);


        var platform37 = createSprite( width - 35, height + ((height/2) - 4555) );
        platform37.addImage(this.img1);
        platform37.mirrorX(-1);
        platform37.setDefaultCollider();
        this.platformsGroup.add(platform37);

        var platform38 = createSprite(  35, height + ((height/2) - 4675) );
        platform38.addImage(this.img1);
        platform38.setDefaultCollider();
        this.platformsGroup.add(platform38);


        var platform39 = createSprite( width - 35, height + ((height/2) - 4795) );
        platform39.addImage(this.img1);
        platform39.mirrorX(-1);
        platform39.setDefaultCollider();
        this.platformsGroup.add(platform39);

        var platform40 = createSprite(  35, height + ((height/2) - 4915) );
        platform40.addImage(this.img1);
        platform40.setDefaultCollider();
        this.platformsGroup.add(platform40);



*/



    }

    
    drawWalls() {

        this.wall1 = createSprite(0,  height + (height/2));
        this.wall1.addImage(this.imgWall);
        this.wall1.setCollider("rectangle", 1 ,0, 20, 1000);
        this.walls.add(this.wall1);
        
        this.wall2 = createSprite(width - 1, height + (height/2));
        this.wall2.addImage(this.imgWall);
        this.wall2.setCollider("rectangle", 1 ,0, 20, 1000);
        this.walls.add(this.wall2); 
    }
    moveWalls(moveY){
        this.wall1.velocity.y = moveY;
        this.wall2.velocity.y = moveY;

    }

    changeConfig(config = { showColliders: false }) {

        this.platformsGroup.forEach(platform => {
            platform.debug = config.showColliders;
        });

        this.platformsGroup2.forEach(platform => {
            platform.debug = config.showColliders;
        });

        this.walls.forEach(wall => {
            wall.debug = config.showColliders;
        });
    }


     plataformD(collector, plataforma, scene) { 
        if( plataforma.getAnimationLabel() == "beer"){
   
            scene.hud.pickBeer();
            this.audioBeer.play();
            setTimeout(function() { 
                //scene.sceneManager.showScene(Menu);
                location.reload();
            }, 4000);

        }
       if( plataforma.getAnimationLabel() == "pDown"){
        //plataforma.remove();
        
       //plataforma.remove();
       //this.plataforma.changeAnimation('plataformE');
        setTimeout(function() { 
            plataforma.remove();
        }, 1500 ); 
      
       
        
        //plataforma.setCollider("circle", 1, 1, 1);
       }
      
    }

    
  
}