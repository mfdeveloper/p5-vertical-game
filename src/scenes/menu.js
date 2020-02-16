import "p5.touchgui";
import { Game } from "./game";

export class Menu {


    preload() {
        this.backgroundImg = loadImage('assets/imgs/menu/bg.png');
        this.logo = loadImage('assets/imgs/menu/logo.png');
        this.keys = loadImage('assets/imgs/menu/tutorial.png');
        
       
        // this.soundTrack.loop();
    }
    
    setup() {
        
        //background(this.backgroundImg);

        this.gui = createGui();
        this.btn = createButton("Start", 135, height /2 + 180);
        this.btn.setStyle({
            fillBg: color("#1F4412"),
            rounding: 10,
            textSize: 25,
            fillLabel: color("#ff9778")
            
        });
        var imgBg = createSprite(width / 2, height/2);
        imgBg.addImage(this.backgroundImg);
        var imgLogo = createSprite(width / 2, height/2 -120);
        imgLogo.addImage(this.logo);

        var imgKeys = createSprite(width / 2, height/2 + 80);
        imgKeys.addImage(this.keys);


       
    }

    draw() {
       
        drawSprites();
        drawGui();
 
        if (this.btn.isPressed) {
            print(this.btn.label + " is pressed.");

            this.sceneManager.showScene(Game, this.sceneArgs);
        }

     
    }

    windowResized() {
        const btnPosition = this._getBtnPosition();

        this.btn.x = btnPosition.x;
        this.btn.y = btnPosition.y;

        background(this.sceneArgs.backgroundColor);
        drawGui();
    }

    _getBtnPosition() {
        let p = {
            x: width < 200 ? width / 4 : width / 3,
            y: windowHeight < 400 ? windowHeight / 2 : windowHeight / 3
        };
        
        return p;
    }
}