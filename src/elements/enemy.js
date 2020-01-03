export class Enemy {

    constructor(){
       this.enemyGroup = new Group();
       this.enemy1;
       this.enemy2;
       this.enemy3;
       this.enemy4;
       this.enemy5;
       this.enemy6;
       this.enemy7;
       this.enemy8;
       this.enemy9;
       this.enemy10;
       this.enemy11;
      
        }
  
    preload() {
        this.imgEnemy = {};
        this.imgEnemy = loadImage('assets/imgs/enemy/g_1.png');
        
      this.imgEnemyFalcon = loadImage('assets/imgs/enemy/h1.png');
    
        this.animationGoat = loadAnimation( 'assets/imgs/enemy/g_2.png', 'assets/imgs/enemy/g_3.png', 'assets/imgs/enemy/g_4.png', 'assets/imgs/enemy/g_5.png');
        this.animationFalcon = loadAnimation( 'assets/imgs/enemy/h1.png', 'assets/imgs/enemy/h2.png');
    }
 

    createEnemy(){
        this.animationGoat.frameDelay = 19;
        this.animationFalcon.frameDelay = 35;
        

        this.enemy1 = createSprite(width + 100, height + (height/2) - 655);
        this.enemy1.addImage(this.imgEnemyFalcon); 
        this.enemy1.addAnimation('normal', this.animationFalcon);
        this.enemy1.setCollider("circle", 0 ,0, 20);
    
        this.enemyGroup.add(this.enemy1);


        this.enemy2 = createSprite(width , height + (height/2) - 300);
        this.enemy2.addImage(this.imgEnemy); 
        this.enemy2.addAnimation('moving', this.animationGoat);
        this.enemy2.mirrorX(-1); 
        this.enemy2.setCollider("circle", 0 ,0, 35);
       
        this.enemyGroup.add(this.enemy2);



        this.enemy3 = createSprite(width + 100, height + (height/2) - 2215);
        this.enemy3.addImage(this.imgEnemyFalcon); 
        this.enemy3.addAnimation('normal', this.animationFalcon);
        this.enemy3.setCollider("circle", 0 ,0, 20);
       
        this.enemyGroup.add(this.enemy3);



        this.enemy4 = createSprite(20 , height + (height/2) - 900);
        this.enemy4.addImage(this.imgEnemy); 
        this.enemy4.addAnimation('moving', this.animationGoat);
        this.enemy4.setCollider("circle", 0 ,0, 35);
       
        this.enemyGroup.add(this.enemy4);

        this.enemy5 = createSprite(width + 100, height + (height/2) - 1375);
        this.enemy5.addImage(this.imgEnemyFalcon); 
        this.enemy5.addAnimation('normal', this.animationFalcon);
        this.enemy5.setCollider("circle", 0 ,0, 20);
        
        this.enemyGroup.add(this.enemy5);


        this.enemy6 = createSprite(20 , height + (height/2) - 1860);
        this.enemy6.addImage(this.imgEnemy); 
        this.enemy6.addAnimation('movingE', this.animationGoat);
        this.enemy6.setCollider("circle", 0 ,0, 35);
        
        this.enemyGroup.add(this.enemy6);






        this.enemy7 = createSprite(width + 100, height + (height/2) - 1735);
        this.enemy7.addImage(this.imgEnemyFalcon); 
        this.enemy7.addAnimation('normal', this.animationFalcon);
        this.enemy7.setCollider("circle", 0 ,0, 20);
       
        this.enemyGroup.add(this.enemy7);


            
        this.enemy8 = createSprite(width + 100, height + (height/2) - 1980);
        this.enemy8.addImage(this.imgEnemyFalcon); 
        this.enemy8.addAnimation('normal', this.animationFalcon);
        this.enemy8.setCollider("circle", 0 ,0, 20);
     
        this.enemyGroup.add(this.enemy8);



        
        this.enemy9 = createSprite(20 , height + (height/2) - 2580);
        this.enemy9.addImage(this.imgEnemy); 
        this.enemy9.addAnimation('movingE', this.animationGoat);
        this.enemy9.setCollider("circle", 0 ,0, 35);
        
        this.enemyGroup.add(this.enemy9);



            
        this.enemy10 = createSprite(width + 100, height + (height/2) - 2815);
        this.enemy10.addImage(this.imgEnemyFalcon); 
        this.enemy10.addAnimation('normal', this.animationFalcon);
        this.enemy10.setCollider("circle", 0 ,0, 20);
        
        this.enemyGroup.add(this.enemy10);

 
        this.enemy11 = createSprite(width , height + (height/2) - 2940);
        this.enemy11.addImage(this.imgEnemy); 
        this.enemy11.addAnimation('moving', this.animationGoat);
        this.enemy11.mirrorX(-1); 
        this.enemy11.setCollider("circle", 0 ,0, 35);
       
        this.enemyGroup.add(this.enemy11);

        
    }

    moveEnemy(playerX, playerY){
        
        
        if(this.enemy1.position.x < 0){
            this.enemy1.setVelocity(1,0);
            this.enemy1.mirrorX(-1);
        }if(this.enemy1.position.x > (width)){
            this.enemy1.setVelocity(-1,0);
            this.enemy1.mirrorX(1);
        }

     
         

        if(this.enemy2.position.y >= playerY){
                this.enemy2.setVelocity(-5,0);
                this.enemy2.changeAnimation('moving');   
        }



        if(this.enemy3.position.x < 0){
            this.enemy3.setVelocity(2,0);
            this.enemy3.mirrorX(-1);
        }if(this.enemy3.position.x > (width)){
            this.enemy3.setVelocity(-2,0);
            this.enemy3.mirrorX(1);
        }
        

     
        if(this.enemy4.position.y >= playerY){
            this.enemy4.setVelocity(5,0);
            this.enemy4.changeAnimation('moving');
    
    }

    
    if(this.enemy5.position.x < 0){
        this.enemy5.setVelocity(3,0);
        this.enemy5.mirrorX(-1);
    }if(this.enemy5.position.x > (width)){
        this.enemy5.setVelocity(-3,0);
        this.enemy5.mirrorX(1);
    }


    if(this.enemy6.position.y >= playerY){
        this.enemy6.setVelocity(5,0);
        this.enemy6.changeAnimation('movingE');

}


    if(this.enemy7.position.x < 0){
        this.enemy7.setVelocity(2,0);
        this.enemy7.mirrorX(-1);
    }if(this.enemy7.position.x > (width)){
        this.enemy7.setVelocity(-2,0);
        this.enemy7.mirrorX(1);
    }


    if(this.enemy8.position.x < 0){
        this.enemy8.setVelocity(4,0);
        this.enemy8.mirrorX(-1);
    }if(this.enemy8.position.x > (width)){
        this.enemy8.setVelocity(-4,0);
        this.enemy8.mirrorX(1);
    }


if(this.enemy9.position.y >= playerY){
    this.enemy9.setVelocity(5,0);
    this.enemy9.changeAnimation('movingE');   
}



if(this.enemy10.position.x < 0){
    this.enemy10.setVelocity(5,0);
    this.enemy10.mirrorX(-1);
}if(this.enemy10.position.x > (width)){
    this.enemy10.setVelocity(-5,0);
    this.enemy10.mirrorX(1);
}


if(this.enemy11.position.y >= playerY){
    this.enemy11.setVelocity(-5,0);
    this.enemy11.changeAnimation('moving');   
}

       
    }






}