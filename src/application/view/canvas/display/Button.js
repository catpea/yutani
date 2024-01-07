import { svg, html, mouse, click, update, text, clip, front } from "domek";

import Control from "./Control.js";

export default class Button extends Control {

	constructor(text, ...more) {
		super(...more);
		if(text) this.text = text;
		this.design.h = 32; // set a base height
		console.log(this);
	}

	createElements() {
		console.log('label', this.above);
		this.el.Surface = svg.rect({ class: `node-captiond`, fill: '#2c434a', ry: this.design.radius, width: this.w, x: this.x, y: this.y, height: this.h });
		this.el.SurfaceText = svg.text({ class: `node-caption caption-text node-text`, style: 'pointer-events: none; user-select: none;', x: this.x + (this.w * .02) }, this.text);
	}

	updateElements() {
		this.observe('y', y => update(this.el.Surface, { y }));
		this.observe('y', y => update(this.el.SurfaceText, { y: y + (this.h - (this.h * .12)) }));
	}

}
