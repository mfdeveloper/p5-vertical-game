import SceneManager from 'p5.scenemanager';
import { Menu } from "./scenes/menu";
import { Environment } from "./helpers/environment";
import 'p5.gui.variables';
import { Game } from './scenes/game';

let params = {
  backgroundColor: '#000',
  showColliders: false,
  showFrameRate: true
};

const canvas = {
  width: 400,
  height: 800
}

let manager = {};

export function preload() {

  // set the global sound formats
  soundFormats('mp3', 'wav');

  manager = new SceneManager({
    scenes: [Menu, Game]
  });
  manager.wire();
}

export function setup() {
  if (displayWidth < canvas.width) {
    canvas.width = displayWidth;
  }
  createCanvas(canvas.width, windowHeight);

  Environment.init();

  if(Environment.isDev()) {
    let gui = createGuiPanel('Variables GUI');
    gui.addObject(params);
  }

  manager.showScene(Menu, params);

}

export function draw() {
  background(params.backgroundColor);
}

/**
 * Called after each `draw()` scene
 *
 * @return {void}
 */
export function drawScene(scene) {
  
  if (!params.showFrameRate) {
    Environment.hideFrame()
  }
  
  if(Environment.isDev() && params.showFrameRate) {
    Environment.showFrame('topRight');
  }

}

export function windowResized() {
  let newWidth = 0;
  if (windowWidth < canvas.width) {
    newWidth = windowWidth;
  } else {
    newWidth = canvas.width;
  }
  resizeCanvas(newWidth, windowHeight);
}
