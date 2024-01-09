import { html, svg, text, list, update } from "domek";

import Container from "./Container.js";
import Button from "./Button.js";

import VBox from "./VBox.js";
import Movable from "./Movable.js";
import Selectable from "./Selectable.js";
import Focusable from "./Focusable.js";
import { VerticalLayout } from "./Layout.js";
import Cleanable from "./Cleanable.js";

export default class Window extends Cleanable {
  title;
  design;
  container;
  data;
  view;

  constructor(title, design) {
    super();
    this.title = title;
    this.design = design;
  }

  start() {

    this.container = new Container(this.title, this.design);
    this.container.data = this.data;
    this.container.view = this.view;
    this.container.layout = new VerticalLayout(); // NOTE: a layout applies to children only, this will not set xywh of the root component
    this.container.start()

    this.cleanup(this.data.observe('x', v=>update(this.container.g,{'transform':`translate(${v},${this.data.y})`} )));
    this.cleanup(this.data.observe('y', v=>update(this.container.g,{'transform':`translate(${this.data.x},${v})`} )));
    this.cleanup(this.data.observe('w', v=>this.container.w=v));
    this.cleanup(this.data.observe('h', v=>this.container.h=v));


    const windowCaption = new Button(this.title + " New Window Tests", {h:15});
    // this.container.use(new Selectable(windowCaption));
    //
    this.container.use( new Movable(windowCaption) );
    // // container.use(new Focusable(windowCaption));
    //
    this.container.children.addAll(windowCaption);
    //
    // const windowBody = new Button("Window Body", {h:200});
    // container.children.add(windowBody);
    //
	}

  add(...components){
    this.container.children.add(...components);
  }

}










    //
    // return ;
    //
    // const container = new Container("Node-Window"); // VBox has the Vertical Layout
    // container.data = item; // data will now be available under .root.data
    // container.view = view; // communication with the view, only on root element.
    // container.design = {gap:1};
    //
    // container.layout = new VerticalLayout(); // NOTE: a layout applies to children only, this will not set xywh of the root component
    //
    // this.cleanup(item.observe('x', v=>update(container.g,{'transform':`translate(${v},${item.y})`} )));
    // this.cleanup(item.observe('y', v=>update(container.g,{'transform':`translate(${item.x},${v})`} )));
    // this.cleanup(item.observe('w', v=>container.w=v));
    // this.cleanup(item.observe('h', v=>container.h=v));
    //
    // view.add( container ); // adds the .g to the svg and .start()s the component
    //
    //
    //
    //
    // const windowCaption = new Button("Window Caption", {h:15});
    // // container.use(new Selectable(windowCaption));
    //
    // container.use( new Movable(windowCaption) );
    // // container.use(new Focusable(windowCaption));
    //
    // container.children.addAll(windowCaption);
    //
    // const windowBody = new Button("Window Body", {h:200});
    // container.children.add(windowBody);

    //
    // container.getChildren().addAll(new Button("Second Button To test Y", {dqd:10}));
    //
    // const box1 = new VBox("Box1");
    // container.getChildren().addAll(box1);
    // box1.getChildren().addAll(new Button("Box 1 > First Button"));
    //
    // const box11 = new VBox("Box11");
    // box1.getChildren().addAll(box11);
    // box11.getChildren().addAll(new Button("Box 1 > 1 > First Button"));
    // box11.getChildren().addAll(new Button("Box 1 > 1 > Second Button"));
    //
    // globalThis.xxx = ()=> {
    //   const chosen = oneOf([container, box1, box11]);
    //   chosen.getChildren().addAll( new Button(null,{dqd:10}) );
    // };
    // setInterval(globalThis.xxx, 1_000)
    // return;
