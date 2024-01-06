/* README

  container has a layout manager associated with it.
  Component addition triggers layout manager
  Component's setBounds called: and component is positioned

*/

class Layout {

	calculateWidth() {
		return 320;
	}
	calculateHeight() {
		return 200;
	}
	calculateX() {
		return 800 * Math.random();
	}
	calculateY() {
		return 600 * Math.random();
	}

}

export class VerticalLayout extends Layout {

	constructor() {
		super();
	}

	calculateWidth() {}

	calculateHeight() {}

	calculateX() {}

	calculateY() {}

}

export class HorizontalLayout extends Layout {

	constructor() {
		super();
	}

	calculateWidth() {}

	calculateHeight() {}

	calculateX() {}

	calculateY() {}

}
