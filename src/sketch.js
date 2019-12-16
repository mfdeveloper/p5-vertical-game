import SceneManager from 'p5.scenemanager';
import { Menu } from "./scenes/menu";
import { Environment } from "./helpers/environment";
import 'p5.gui.variables';

let params = {
  backgroundColor: '#000',
  showColliders: true,
  showFrameRate: true
};

const canvas = {
  width: 400,
  height: 3000
}

export function preload() {

  // set the global sound formats
  soundFormats('mp3', 'wav');
}

export function setup() {
  if (displayWidth < canvas.width) {
    canvas.width = displayWidth;
  }
  createCanvas(canvas.width, canvas.height);
  
  Environment.init();

  if(Environment.isDev()) {
    let gui = createGuiPanel('Variables GUI');
    gui.addObject(params);
  }
  
  let mgr = new SceneManager();
  mgr.wire();
  mgr.showScene(Menu, params);

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
