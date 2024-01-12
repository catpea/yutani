import { v4 as uuid } from "uuid";
import { svg, html, mouse, click, update, text, clip, front } from "domek";
import Component from "./Component.js";
import List from "./List.js";


export default class Container extends Component {
	g = svg.g();

  name = "";
	#children = new List();

	constructor(name, design) {
		super();
    this.name = name;
    this.design = design;

    // When a child is added...
		this.cleanup(this.children.observe('created', item => {
      // Structural Initialization
      item.container = this;
      item.g = this.g;

      // Item Layout & Lifecycle
			item.start();
			this.layout.manage(item);

			// if(this.container) this.cleanup(item.observe('h', whatever=>this.container.getLayout().refresh(this.container, this) ))

      // console.log(`Added "${item.name||item.text}" to "${this.name}"`);
    }, {autorun:false}));

		this.cleanup(this.children.observe('removed', item => {
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

    if(this.DEBUG) this.el.CaptionText = svg.text({ fill: this.design.color, x: this.x, y: this.y,  }, this.name);

  }



  updateElements(){

    // obsere xywh of this component, and if it changes, update the svg drawing.
    // NOTE: only the layout manager of parent container should set these (exception is the root container)
    this.observe('w',  width=>update(this.el.Container,{width}),  {autorun: false});
    this.observe('h', height=>update(this.el.Container,{height}), {autorun: false});
    this.observe('x',      x=>update(this.el.Container,{x}),      {autorun: false});
    this.observe('y',      y=>update(this.el.Container,{y}),      {autorun: false});

		this.observe('y',      y=>update(this.el.Container,{y}),      {autorun: false});





		const radiusDomain = new TranslateDomain([0.5, 1], [0,1]);
		this.view.observe('transform', ({scale})=>{
			if(scale===undefined) scale=1;
			const ry = this.design.radius * radiusDomain.translate(scale);
			console.log(`At scale ${scale}: the radius is ${ry}`);
			update(this.el.Container,{ry})
		});

  }



	get children() {
		return this.#children;
	}

}

// const radiusDomain = new TranslateDomain([this.view.minZoom, this.view.maxZoom], [0,1]);
// this.view.observe('transform', ({scale})=> update(this.el.Container,{ry: this.design.radius * skale(scale, [this.view.minZoom, 1],[0,1], {clamp:true}) }));
// function skale(value, sourceRange, targetRange, options={}) {
//
// 	const defaults = {
// 		clamp: false,
// 	}
// 	const configuration = Object.assign({}, defaults, options)
//
// 	if(configuration.clamp){
// 		if(value>sourceRange[1]) value=sourceRange[1];
// 		if(value<sourceRange[0]) value=sourceRange[0];
// 	}
//
// 	// get the ratio of the value relative to the range
// 	const valueRatio = (value - sourceRange[0]) / (sourceRange[1] - sourceRange[0]);
//
// 	// map this ratio to the domain
// 	const scaledValue = targetRange[0] + valueRatio * (targetRange[1] - targetRange[0]);
//
// 	return scaledValue;
// }


class TranslateDomain {
    clamp = true;
    sourceRange = [0, 1];
    targetRange = [0, 1];
    constructor(sourceRange, targetRange, options = {}) {
        this.sourceRange = sourceRange;
        this.targetRange = targetRange;
        if (options.hasOwnProperty('clamp')) this.clamp = options.clamp;
    }
    clamper(num, min, max) {
        return Math.min(Math.max(num, min), max);
    }
    inverter(num, min, max) {
        if (this.clamp) num = this.clamper(num, this.sourceRange[0], this.sourceRange[1])
        // calculate distance traveled
        const rangeLength = max - min;
        const distance = Math.abs(rangeLength - num);
        // add distance to min
        const invertedValue = max - distance;
        // console.log(`${this.sourceRange[0]}-${this.sourceRange[1]}` ,{rangeLength, distance, invertedValue});
        return invertedValue;
    }
    translate(num) {
        if (this.clamp) num = this.clamper(num, this.sourceRange[0], this.sourceRange[1])
        // get the ratio of the value relative to the range
        const valueRatio = (num - this.sourceRange[0]) / (this.sourceRange[1] - this.sourceRange[0]);
        // map this ratio to the domain
        const scaledValue = this.targetRange[0] + valueRatio * (this.targetRange[1] - this.targetRange[0]);
        return scaledValue;
    }
    invert(num) {
        const invertedValue = this.inverter(num, this.sourceRange[0], this.sourceRange[1]);
        const translatedValue = this.translate(invertedValue);
        return translatedValue;
    }

}
