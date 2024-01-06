import Container from "./Container.js";

export default class HBox extends Container {

	constructor(...arg) {
		super(...arg);
		this.height = this.calculateHeight();
	}

	get x() {
		const isRoot = this.root === this;
		const isNested = this.container;

		if(isRoot) {
			return this.data.x;
		} else if(isNested) {
			return 0 +
				this.container.x +
				this.container.bounds.border +
				this.container.bounds.padding
		}
	}

	calculateY() {
		const isRoot = this.root === this;
		const isNested = this.container;

		if(isRoot) {
			return this.bounds.y;
		} else if(isNested) {

			console.log(`YCALC: ${this.name} ABOVE`, this.aboveAll.map(o=>o.name), this.above.reduce((total, child) => total + (this.bounds.absolute ? 0 : child.height), 0));
				const response =
			 	this.container.y +
			 	this.container.bounds.border +
			 	this.container.bounds.padding +
			 	this.above.reduce((total, child) => total + (this.bounds.absolute ? 0 : child.height), 0) +
			 	((this.container.bounds.gap * 2) * this.above.length)
				return response;
		}
	}

	get width() {
		const isRoot = this.root === this;
		const isNested = this.container;

		if(isRoot) {
			return this.bounds.width;
		} else if(isNested) {

			return 0 +
				this.container.width
				/* REMOVE SPACE USED BY PARENT PADDING */
				- (this.container.bounds.border + this.container.bounds.padding) * 2
		}
	}

	calculateHeight() {
		return +this.bounds.border +
			this.bounds.padding +
			this.bounds.height +
			this.getChildren().reduce((total, child) => total + (child.height), 0) +
			((this.bounds.gap * 2) * (this.getChildren().length > 0 ? this.getChildren().length - 1 : 0 /* not counting gap in last child as it does not have one*/ )) +
			this.bounds.padding +
			this.bounds.border;
	}


}
