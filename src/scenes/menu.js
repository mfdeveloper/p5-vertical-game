import "p5.touchgui";
import { Game } from "./game";

export class Menu {


    preload() {
        this.backgroundImg = loadImage('assets/imgs/scenario/fundomenu.png');
    }
    
    setup() {

        const btnPosition = this._getBtnPosition();

      

       
        //background(this.backgroundImg);

        this.gui = createGui();
        this.btn = createButton("Start", 150, height /2 + 130);
        var fundoImagem = createSprite(width / 2, height/2);
        fundoImagem.addImage(this.backgroundImg);
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