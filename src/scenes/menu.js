import "p5.touchgui";
import { Game } from "./game";

export class Menu {

    setup() {

        this.gui = createGui();
        this.btn = createButton("Start", 200, 200);
    }

    draw() {
        background(this.sceneArgs.backgroundColor);
        drawGui();

        if (this.btn.isPressed) {
            print(this.btn.label + " is pressed.");

            this.sceneManager.showScene(Game);
        }
    }
}