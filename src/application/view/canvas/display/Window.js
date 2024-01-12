import { html, svg, text, list, update } from "domek";

import Container from "./Container.js";
import Workspace from "./Workspace.js";
import Button from "./Button.js";

import VBox from "./VBox.js";
import Movable from "./Movable.js";
import Selectable from "./Selectable.js";
import Focusable from "./Focusable.js";
import { VerticalLayout } from "./Layout.js";
import Cleanable from "./Cleanable.js";

export default class Window extends Container {

  constructor(...argv) {
    super(...argv);
		this.layout = new VerticalLayout(); // NOTE: a layout applies to children only, this will not set xywh of the root component
	}

  start() {
    super.start();

    this.cleanup(this.data.observe('x', v=>update(this.g,{'transform':`translate(${v},${this.data.y})`} )));
    this.cleanup(this.data.observe('y', v=>update(this.g,{'transform':`translate(${this.data.x},${v})`} )));
    this.cleanup(this.data.observe('w', v=>this.w=v));
    this.cleanup(this.data.observe('h', v=>this.h=v));

    const windowCaption = new Button(`type:${this.data.type}: A Window Tests`, {h:15});
    // this.use(new Selectable(windowCaption));
    //
    this.use( new Movable(windowCaption) );
    // // container.use(new Focusable(windowCaption));
    //
    this.children.addAll(windowCaption);
    //
    // const windowBody = new Button("Window Body", {h:200});
    // container.children.add(windowBody);
    //
    const inputPort = new Button("o <-- Data Input ...........(ThroughPort.js)...............  Data Output --> o", {});
    this.children.add(inputPort);

    const workspaceTest = new Workspace("./templates/hello-world.json", {h:100});
    workspaceTest.view = this.view;

    this.children.add(workspaceTest);

    const foreignElementTest = new Button("I am an example DIV Tag, with some text in it.", {h:100});
    this.children.add(foreignElementTest);

    const foreignElementTest1 = new Button("I am an ANSI Terminal", {h:100});
    this.children.add(foreignElementTest1);

    const foreignElementTest2 = new Button("I am Code Mirror 6, woot!", {h:100});
    this.children.add(foreignElementTest2);
	}

  addTo(container, ...components){
    this[container].add(...components);
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
