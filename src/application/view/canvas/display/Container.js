import { v4 as uuid } from "uuid";
import { svg, html, mouse, click, update, text, clip, front } from "domek";
import Component from "./Component.js";
import List from "./List.js";


export default class Container extends Component {
	g = svg.g();

  name = "";
	#children = new List();

	constructor(name) {
		super();
    this.name = name;

    // When a child is added...
		this.cleanup(this.getChildren().observe('created', item => {
      // Structural Initialization
      item.container = this;
      item.g = this.g;

      // Item Layout & Lifecycle
			item.start();
			this.layout.manage(item);

			// if(this.container) this.cleanup(item.observe('h', whatever=>this.container.getLayout().refresh(this.container, this) ))

      // console.log(`Added "${item.name||item.text}" to "${this.name}"`);
    }, {autorun:false}));

		this.cleanup(this.getChildren().observe('removed', item => {
      item.stop();
      this.layout.forget(item);
    }, {autorun:false}));

	}

  createElements(){

    this.el.Container = svg.rect({
      name: this.name,
      class: 'node-box',
      ry: this.design.radius,
      'stroke-width': 2,
      stroke: this.design.color,

      // set initial values
      // these are special, handeled by the layout manager
      // NOTE: these are observables, getter returns a value, setter notifies listeners, and you can ```this.observe('x', v=>{...})```
      width: this.w,
      height: this.h,
      x: this.x,
      y: this.y,

    });

    this.el.CaptionText = svg.text({ fill: this.design.color, x: this.x, y: this.y,  }, this.name);

  }

  updateElements(){

    // obsere xywh of this component, and if it changes, update the svg drawing.
    // NOTE: only the layout manager of parent container should set these (exception is the root container)
    this.observe('w',  width=>update(this.el.Container,{width}),  {autorun: false});
    this.observe('h', height=>update(this.el.Container,{height}), {autorun: false});
    this.observe('x',      x=>update(this.el.Container,{x}),      {autorun: false});
    this.observe('y',      y=>update(this.el.Container,{y}),      {autorun: false});

  }



	getChildren() {
		return this.#children;
	}

}
