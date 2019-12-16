import "p5.touchgui";
import { Game } from "./game";

export class Menu {

    setup() {

        const btnPosition = this._getBtnPosition();
        background(this.sceneArgs.backgroundColor);

        this.gui = createGui();
        this.btn = createButton("Start", btnPosition.x, btnPosition.y);

    }

    draw() {
        
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