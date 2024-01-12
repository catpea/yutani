import { svg, html, mouse, click, update, text, clip, front } from "domek";

import Container from "./Container.js";
import { ManualLayout } from "./Layout.js";

export default class Workspace extends Container {

	constructor(jsonPath, ...arg) {
		super(...arg);
		this.layout = new ManualLayout(); // NOTE: a layout applies to children only, this will not set xywh of the root component
	}

  createElements() {
    super.createElements();

		this.el.Maximize = svg.path( { class: `workspace-icon`, stroke: 'green',  style:`transform:translateX(${this.x + 10}px) translateY(${this.y + 10}px);`, d:`M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5M.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5` } );
	}

  updateElements() {
    super.updateElements();

    this.observe('x', () => update(this.el.Maximize, {  style:`transform:translateX(${this.w - 10 - 16}px) translateY(${this.y + 10}px);` }));
    this.observe('y', () => update(this.el.Maximize, {  style:`transform:translateX(${this.w - 10 - 16}px) translateY(${this.y + 10}px);` }));
    this.observe('w', () => update(this.el.Maximize, {  style:`transform:translateX(${this.w - 10 - 16}px) translateY(${this.y + 10}px);` }));
    // this.observe('y', y => update(this.el.Maximize, { translateY: y+10 }));
    // this.observe('w', w => update(this.el.Maximize, { translateX: w-10-16 }));


  }


}
