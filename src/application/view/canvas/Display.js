import oneOf from "oneof";
import { html, svg, text, list, update } from "domek";

//TODO: Rename base to Renderer
import Base from './Base.js';

import Container from "./display/Container.js";
import { VerticalLayout } from "./display/Layout.js";

import VBox from "./display/VBox.js";
import HBox from "./display/HBox.js";

import Label from "./display/Label.js";
import Button from "./display/Button.js";

import Movable from "./display/Movable.js";
import Selectable from "./display/Selectable.js";
import Focusable from "./display/Focusable.js";

// import Container from "./node/Container.js";
// import Caption from "./node/Caption.js";
// import Pod from "./node/Pod.js";
// import Row from "./node/Row.js";
// import Port from "./node/Port.js";
// import Editor from "./node/Editor.js";

export default class Display extends Base {

  start({item, view}){

    const container = new Container("Node-Window"); // VBox has the Vertical Layout
    container.setData(item); // data will now be available under .root.data
    container.setView(view); // communication with the view, only on root element.
    container.setDesign({gap:1});
    container.setLayout(new VerticalLayout()); // NOTE: a layout applies to children only, this will not set xywh of the root component

    this.cleanup(item.observe('x', v=>update(container.g,{'transform':`translate(${v},${item.y})`} )));
    this.cleanup(item.observe('y', v=>update(container.g,{'transform':`translate(${item.x},${v})`} )));
    this.cleanup(item.observe('w', v=>container.w=v));
    this.cleanup(item.observe('h', v=>container.h=v));

    view.add( container ); // adds the .g to the svg and .start()s the component




    const windowCaption = new Button("Window Caption", {h:15});
    // container.use(new Selectable(windowCaption));
    // container.use(new Focusable(windowCaption));
    container.use( new Movable(windowCaption) );
    container.getChildren().addAll(windowCaption);




    container.getChildren().addAll(new Button("Second Button"));

    const box1 = new VBox("Box1");
    container.getChildren().addAll(box1);
    box1.getChildren().addAll(new Button("Box 1 > First Button"));

    const box11 = new VBox("Box11");
    box1.getChildren().addAll(box11);
    box11.getChildren().addAll(new Button("Box 1 > 1 > First Button"));
    box11.getChildren().addAll(new Button("Box 1 > 1 > Second Button"));

    globalThis.xxx = ()=> {
      const chosen = oneOf([container, box1, box11]);
      chosen.getChildren().addAll( new Button(null) );
    };
    // setInterval(globalThis.xxx, 1_000)


  }

}
