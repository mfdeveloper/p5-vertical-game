import SceneManager from 'p5.scenemanager';
import { Menu } from "./scenes/menu";
import { Environment } from "./helpers/environment";
import 'p5.gui.variables';

let params = {
  backgroundColor: '#000',
  showColliders: true
};

const width = 400;
const height = 3000;

export function setup() {
  createCanvas(width, height);

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
 * @return  {void}
 */
export function drawScene(scene) {
  
  if(Environment.isDev()) {
    Environment.showFrame();
  }
}
