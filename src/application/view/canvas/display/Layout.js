/* README

  container has a layout manager associated with it
	layout managers are needed to allow HBox and VBox calculations
  component addition triggers registration/addition and from there it is all reactive.
  Component's setBounds called: and component is positioned

	VBox Layout manager, ultimatley wants to correctly set its own .h,
	it is civen all the children for that purpose, and it will use the H of the children.

	A child either has a pre-set height as the case is with controls,
	or a height that may change as the case it with containers that may receive more children.

	BUT THEY MANAGE THEIR OWN HEIGHT,
	NEVER CHANGE THE HEIGHT OF A CHILD,
	just set their x and y in relation to the H of other children
	and then set your own H.

*/

import Container from "./Container.js";

const BOTH_SIDES = 2

let pusher = 0;

export class Layout {

	container;

	constructor() {}

	// refresh(container, child){
	// 	// this.update(container, child);
	// }

	manage(child) {
		// const container = this.container;
		// // .h of a child is set by it self, you never set it here.
		// // you must monitor it, becasue the .h of a child changes the height of this container.
		// child.observe('h', () => {
		// 	// some child changed height,
		// 	// calculate a new container height
		// 	container.h = this.calculateH(container, child);
		// }, {autostart: false});


		// both wh and bubble up to the top when things are added, it is a great thing to monitor in other to reposition components
		// this.container.getRoot().observe('h', () => this.update(child), {autorun: false});
		// this.container.getRoot().observe('w', () => this.update(child), {autorun: false});

		// if(container.container) child.observe('h', () => this.container.getLayout().refresh(container.container, container), {autorun: false});

		// this.child.observe('x', () => this.update(child), {autorun: false});
		// this.child.observe('y', () => this.update(child), {autorun: false});
		// this.container.observe('w', () => this.update(child), {autorun: false});

		// this.cleanup(this.container.getChildren().observe('created', item => {
		// 	this.update(child);
		//
		// }));


		// if(this.container.container) this.cleanup(
		// 	// child.observe('h', xxx=>container.container.getLayout().refresh(container.container, child) )
		// );

		// when we subscribe to pertinent things with autorun false, we then tun the layout
		// this.update(container, child);


		// you are the layout manager for this.component
		// you have 2 DIFFERENT responsobilities
		// RESPOSIBILITY #1: set the x and y of children - THIS IS THE MAIN THING THAT LAYOUT MANAGERS DO!
		// RESPOSIBILITY #2: set the h of this container to correctly contain the newly layed out children
		//                   set the w of this component...
		child.x = this.calculateChildX(child);
		child.y = this.calculateChildY(child);
		child.w = this.calculateChildW(child);

		// at the same time, be aware that parent will set your X/Y
		// so monotor it!
		this.container.observe('x', () => child.x = this.calculateChildX(child) );
		this.container.observe('y', () => child.y = this.calculateChildY(child) );
		this.container.observe('w', () => child.w = this.calculateChildW(child) );

		child.observe('h', () => this.container.h = this.calculateH() );

		this.container.observe('h', () => child.y = this.calculateChildY(child) );








		// this.container.h = this.calculateH();

		// this.container.w = this.calculateW();

		// pusher=pusher+32;
		// child.x = pusher
		// child.y = pusher

		if(this.container.isRoot){
			console.log('IN ROOT', this.container);
		}
	}

	update(container, child) {
		// all we care about are these four properties
		// NOTE: these have nothing to do with xywh of a node, these are for litte UI components in the UI of it
		// child.w = this.calculateW(container, child);
		// child.h = this.calculateH(container, child);
		child.x = this.calculateX(container, child);
		child.y = this.calculateY(container, child);
	}

	calculateChildW() {
		// NOTE: this width is the widh of litte UI inside a node
		// to calculate the width of a child, you need to look at the space the container has
		return 320 * Math.random();
	}
	calculateH() {
		//NOTE: this height is the height of a litte UI component inside the node UI
		// often a child will set its own height, but look at the area container has and number of children in HBox case
		return 200 * Math.random();
	}
	calculateChildX(container, child) {
		// NOTE: this x is not the x of the visual programming node, this x is that of nested UI components within it
		// x is relative to the container x
		return 800 * Math.random();
	}
	calculateChildY(container, child) {
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

	calculateChildW(child) {
		console.log(`Calculating child width in ${this.container.name} for child ${child.name||child.text}`);
		console.log(`My width is ${this.container.w}.`);
		const response =
			this.container.w -
			((this.container.design.border + this.container.design.padding) * BOTH_SIDES) // REMOVE SPACE USED BY PARENT PADDING

		console.log(`Returning ${response}`);
		return response;
	}

	calculateH() {
		// based on the .h of all children calculate this h
		//
		// let nestedContainerHeight = 0;
		// if(child.getChildren) {
		// // if(Container.prototype.isPrototypeOf(child)) {
		// const children = child.getChildren();
		// 	nestedContainerHeight = children.reduce((total, c) => total + (c.h), 0) +
		// 		((container.design.gap * 2) * (children.length > 0 ? children.length - 1 : 0 /* not counting gap in last child as it does not have one*/ ))
		// 		// console.log(child.name, children.length, childrenHeight);
		// }

		let heightOfChildren = 0;
		const children = this.container.getChildren();
		heightOfChildren = children.reduce((total, c) => total + (c.h), 0) +
				((this.container.design.gap * 2) * (children.length > 0 ? children.length - 1 : 0 /* not counting gap in last child as it does not have one*/ ))


		const response =
			this.container.design.border +
			this.container.design.padding +
			this.container.design.h + // NOT A MISTAKE design can hold a base h that is used in calculations
			heightOfChildren +
		  this.container.design.padding +
			this.container.design.border;
		return response;
	}
	// calculateH(container, child) {
	//
	// 	let childrenHeight = 0;
	// 	if(child.getChildren) {
	// 	// if(Container.prototype.isPrototypeOf(child)) {
	// 	const children = child.getChildren();
	// 		childrenHeight = children.reduce((total, c) => total + (c.h), 0) +
	// 			((container.design.gap * 2) * (children.length > 0 ? children.length - 1 : 0 /* not counting gap in last child as it does not have one*/ ))
	// 			// console.log(child.name, children.length, childrenHeight);
	// 	}
	//
	// 	const response =
	// 		child.design.border +
	// 		child.design.padding +
	// 		child.design.h + // NOT A MISTAKE design can hold a base h that is used in calculations
	// 		childrenHeight +
	// 	  child.design.padding +
	// 		child.design.border;
	// 	return response;
	// }

	calculateChildX() {
		const response =
		  this.container.x + // use my own x
			this.container.design.border + // add border
			this.container.design.padding; // add padding
		return response;
	}

	calculateChildY(child) {
		//console.log();
		const response =
			this.container.y +
			this.container.design.border +
			this.container.design.padding +
			this.above(this.container, child).reduce((total, child) => total + child.h, 0) +
			((this.container.design.gap * 2) * this.above(this.container, child).length);

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
	// calculateChildX() {}
	//
	// calculateChildY() {}

}
