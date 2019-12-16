import SceneManager from 'p5.scenemanager';
import { Menu } from "./scenes/menu";
import { Environment } from "./helpers/environment";
import 'p5.gui.variables';

let params = {
  backgroundColor: '#000',
  showColliders: true
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

  if(Environment.isDev()) {
    let gui = createGuiPanel('Variables GUI');

    params.gui = gui;
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
  
  if(Environment.isDev()) {
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
