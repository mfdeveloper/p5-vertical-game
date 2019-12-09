import SceneManager from 'p5.scenemanager';
import { Menu } from "./scenes/menu";

let backgroundColor = 'black';

const width = 500;
const height = 500;

export function setup() {
  createCanvas(width, height);

  let mgr = new SceneManager();
  mgr.wire();
  mgr.showScene(Menu);
}

export function draw() {
  background(backgroundColor);
};
