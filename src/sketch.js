import SceneManager from 'p5.scenemanager';
import { Menu } from "./scenes/menu";
import 'p5.gui.variables';

let params = {
  backgroundColor: '#000'
};

const width = 500;
const height = 500;

export function setup() {
  createCanvas(width, height);

  let gui = createGuiPanel('Variables GUI');

  gui.addObject(params);

  let mgr = new SceneManager();
  mgr.wire();
  mgr.showScene(Menu, params);
}

export function draw() {
  background(params.backgroundColor);
}
