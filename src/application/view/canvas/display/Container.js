import { v4 as uuid } from "uuid";
import { svg, html, mouse, click, update, text, clip, front } from "domek";
import Component from "./Component.js";
import List from "./List.js";

export default class Container extends Component {
  root;
	g = svg.g();

  name = "";
	#children = new List();

	constructor(name) {
		super();
    this.name = name;
    if(!this.root) this.root = this;

    // When a child is added...
		this.cleanup(this.getChildren().observe('created', item => {
      // Structural Initialization
      item.root = this.root;
      item.container = this;
      item.g = this.g;

      // item.observe('width', x => this.width = this.calculateWidth())

      // declared in Component.js
      this.cleanup(item.observe('height', x => this.height = this.calculateHeight()))
      // this.cleanup(item.observe('height', x => this.y = this.calculateY()))

      item.start();
      // update(this.el.Container, {height: this.height})

      // console.error('MONITOR FOR NESTED CONTAINERS AND RECALCULATE BASED ON THEIR LISTS');
      console.info(`${this.name} has ${this.getChildren().length} ${this.getChildren().length==1?'child':'children'} now`, this.getChildren().raw)
      console.info(`${this.name}`, this.height , this.getChildren().raw)
    }, {autorun:false}));



	}

  createElements(){
    this.el.Container = svg.rect({
      name: this.name,
      class: 'node-box',
      ry: this.bounds.radius,
      width: this.width,
      height: this.height,
      // 'stroke-width': 2,
      // stroke: this.bounds.color,
      x: this.x,
      y: this.y,
    });

    // this.el.CaptionText = svg.text({ fill: this.bounds.color, x: this.x, y: this.y,  }, this.name);


    console.log(this.name, {      x: this.x,
          y: this.y,});
  }

  appendElements(){
    this.g.appendChild(this.el.Container)
    // this.g.appendChild( this.el.CaptionText );
    // Object.values(this.el).forEach(el => this.g.appendChild(el));

  }

  updateElements(){
    this.observe('height', height=>update(this.el.Container,{height}) );
    this.observe('y', y=>update(this.el.Container,{y}) );
    // this.observe('y', y=>update(this.el.CaptionText,{y}) );
  }

  removeElements(){
    Object.values(this.el).forEach(el => el.remove());
  }

	start() {
    this.createElements();
    this.updateElements();
    this.appendElements();


    this.root.observe('height', height=> {
      this.y = this.calculateY()
    });


  }



  stop() {
    this.removeElements();
  }







	getChildren() {
		return this.#children;
	}

  get aboveAll(){
    if(!this.container) return [];
    const selfIndex = this.container.getChildren().indexOf(this);
    const response =  [...this.container.aboveAll, ...this.container.getChildren().slice(0, selfIndex )];
    return response;
  }
  get above(){
    const selfIndex = this.container.getChildren().indexOf(this);
    const response =  this.container.getChildren().slice(0, selfIndex );
    return response;
  }

}
