/**
 * This file mix P5 "instance" and "global" mode,
 * using global functios from "sketch.js" and a
 * instance added to `window` object
 * 
 * @see https://github.com/processing/p5.js/wiki/p5.js-overview#instantiation--namespace
 */

import p5 from 'p5';
import 'p5/lib/addons/p5.sound';

import * as sketchHooks from './sketch';

// Attach everything that is exported from sketch to window
(w => {
    Object.keys(sketchHooks).forEach(hook => {
        w[hook] = sketchHooks[hook]; 
    });
})(window);

const sketch = p => {
    for (const hook in sketchHooks) {
        if (sketchHooks.hasOwnProperty(hook) 
            && typeof sketchHooks[hook] == 'function') {
            p[hook] = sketchHooks[hook];
        }
    }
}

export const p5Instance = new p5(sketch);
window.p5 = p5Instance;
