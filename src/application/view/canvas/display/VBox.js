import Container from "./Container.js";
import { VerticalLayout } from "./Layout.js";

export default class VBox extends Container {

	constructor(...arg) {
		super(...arg);
		this.layout = new VerticalLayout(); // NOTE: a layout applies to children only, this will not set xywh of the root component
	}

}
