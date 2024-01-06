import { svg, html, mouse, click, update, text, clip, front } from "domek";

import Control from "./Control.js";

export default class Button extends Control {

	text = "";

	constructor(text) {
		super();
		this.text = text;
		this.height = 32;
	}

	createElements() {
		console.log('label', this.above);
		this.el.Caption = svg.rect({ class: `node-captiond`, fill: '#2c434a', ry: this.bounds.radius, width: this.width, x: this.x, y: this.y, height: this.height });
		this.el.CaptionText = svg.text({ class: `node-caption caption-text node-text`, style: 'pointer-events: none; user-select: none;', x: this.x + (this.width * .02) }, this.text);

	}

	updateElements() {
		this.observe('y', y => update(this.el.Caption, { y }));
		this.observe('y', y => update(this.el.CaptionText, { y: y + (this.height - (this.height * .12)) }));
	}

	appendElements() {
		this.g.appendChild(this.el.Caption);
		this.g.appendChild(this.el.CaptionText);
	}


	start() {

		this.createElements();
		this.updateElements();
		this.appendElements();

		this.root.observe('height', height => {
			console.log('Height changed');
			this.y = this.calculateY()
		})

	}


}
