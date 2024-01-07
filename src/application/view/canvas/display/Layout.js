/* README

  container has a layout manager associated with it
	layout managers are needed to allow HBox and VBox calculations
  component addition triggers registration/addition and from there it is all reactive.
  Component's setBounds called: and component is positioned

*/

import Container from "./Container.js";

const BOTH_SIDES = 2

class Layout {

	container;

	constructor() {}

	refresh(container, child){
		this.update(container, child);
	}

	manage(child) {

		// both wh and bubble up to the top when things are added, it is a great thing to monitor in other to reposition components
		// this.container.getRoot().observe('h', () => this.update(child), {autorun: false});
		// this.container.getRoot().observe('w', () => this.update(child), {autorun: false});

		// if(container.container) child.observe('h', () => this.container.getLayout().refresh(container.container, container), {autorun: false});

		// this.child.observe('x', () => this.update(child), {autorun: false});
		// this.child.observe('y', () => this.update(child), {autorun: false});
		// this.container.observe('w', () => this.update(child), {autorun: false});
		// this.container.observe('h', () => this.update(child), {autorun: false});

		// this.cleanup(this.container.getChildren().observe('created', item => {
		// 	this.update(child);
		//
		// }));

		this.update(this.container, child);

		// if(this.container.container) this.cleanup(
		// 	// child.observe('h', xxx=>container.container.getLayout().refresh(container.container, child) )
		// );

	}

	update(container, child) {
		// all we care about are these four properties
		// NOTE: these have nothing to do with xywh of a node, these are for litte UI components in the UI of it
		child.w = this.calculateW(container, child);
		child.h = this.calculateH(container, child);
		child.x = this.calculateX(container, child);
		child.y = this.calculateY(container, child);
	}

	calculateW(container, child) {
		// NOTE: this width is the widh of litte UI inside a node
		// to calculate the width of a child, you need to look at the space the container has
		return 320 * Math.random();
	}
	calculateH(container, child) {
		//NOTE: this height is the height of a litte UI component inside the node UI
		// often a child will set its own height, but look at the area container has and number of children in HBox case
		return 200 * Math.random();
	}
	calculateX(container, child) {
		// NOTE: this x is not the x of the visual programming node, this x is that of nested UI components within it
		// x is relative to the container x
		return 800 * Math.random();
	}
	calculateY(container, child) {
		// NOTE: this y is not the y of the visual programming node, this y is that of nested UI components within it
		return 600 * Math.random();
	}




	// utility classes to help with simple and pretty looking calculations
	// NOTE: these are getter so you can: this.o + this.child.e
	above(container, child) { // above
		const selfIndex = container.getChildren().indexOf(child);
		return container.getChildren().slice(0, selfIndex);
	}
	#cleanup = [];

	cleanup(...arg){
		this.#cleanup.push(...arg);
	}

}









export class VerticalLayout extends Layout {

	constructor() {
		super();
	}

	calculateW(container, child) {
		const response = container.w -
			(container.design.border + container.design.padding) * BOTH_SIDES // REMOVE SPACE USED BY PARENT PADDING
		return response;
	}

	calculateH(container, child) {

		let childrenHeight = 0;
		if(child.getChildren) {
		// if(Container.prototype.isPrototypeOf(child)) {
		const children = child.getChildren();
			childrenHeight = children.reduce((total, c) => total + (c.h), 0) +
				((container.design.gap * 2) * (children.length > 0 ? children.length - 1 : 0 /* not counting gap in last child as it does not have one*/ ))
				console.log(child.name, children.length, childrenHeight);
		}

		const response =
			child.design.border +
			child.design.padding +
			child.design.h + // NOT A MISTAKE design can hold a base h that is used in calculations
			childrenHeight +
		  child.design.padding +
			child.design.border;
		return response;
	}

	calculateX(container, child) {
		const response =
		  container.x +
			container.design.border +
			container.design.padding;
		return response;
	}

	calculateY(container, child) {
		//console.log();
		const response =
			container.y +
			container.design.border +
			container.design.padding +
			this.above(container, child).reduce((total, child) => total + child.h, 0) +
			((container.design.gap * 2) * this.above(container, child).length);

		return response;
	}

}

export class HorizontalLayout extends Layout {

	constructor() {
		super();
	}

	// calculateW() {}
	//
	// calculateH() {}
	//
	// calculateX() {}
	//
	// calculateY() {}

}
