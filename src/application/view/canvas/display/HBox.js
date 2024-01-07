import Container from "./Container.js";
import { HorizontalLayout } from "./Layout.js";

export default class HBox extends Container {

	constructor(...arg) {
		super(...arg);
		this.setLayout(new HorizontalLayout()); // NOTE: a layout applies to children only, this will not set xywh of the root component
	}

}
