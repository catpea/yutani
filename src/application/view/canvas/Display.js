import oneOf from "oneof";
import { html, svg, text, list, update } from "domek";

import Base from './Base.js';

import VBox from "./display/VBox.js";
import HBox from "./display/HBox.js";

import Label from "./display/Label.js";
import Button from "./display/Button.js";

// import Container from "./node/Container.js";
// import Caption from "./node/Caption.js";
// import Pod from "./node/Pod.js";
// import Row from "./node/Row.js";
// import Port from "./node/Port.js";
// import Editor from "./node/Editor.js";

export default class Display extends Base {

  start({item, view}){


    const container = new VBox("MainContainer");
    container.setBounds({ color: "pink", radius:item.radius, x:item.x, y:item.y, width:item.width, fheight:item.height, border: 1, padding:10, gap:1});
    container.setData(item);
    container.start(); // manually start root before adding anything (the act of adding will start others)
    view.add( container );

    const box1 = new VBox("Box1");
    box1.setBounds({ color:'red', radius:item.radius, border: 1, padding:10, gap:1,  });
    container.getChildren().addAll(box1);
    box1.getChildren().addAll( new Button("HBox Tests"));


    const hbox1 = new HBox("Box1");
    hbox1.setBounds({ color:'red', radius:item.radius, border: 1, padding:10, gap:1 });
    container.getChildren().addAll(hbox1);

    const a = new Button("This should be on the left");
    a.setBounds({width: 64});
    const b = new Button("on right");
    b.setBounds({width: 64});

    hbox1.getChildren().addAll(a);
    hbox1.getChildren().addAll(b);


    return;

    // const container = new VBox("MainContainer");
    // container.setBounds({ color: "pink", radius:item.radius, x:item.x, y:item.y, width:item.width, fheight:item.height, border: 1, padding:10, gap:1});
    // container.setData(item);
    // container.start(); // manually start root before adding anything (the act of adding will start others)
    //
    //
    // const box1 = new VBox("Box1");
    // box1.setBounds({ color:'red', radius:item.radius, border: 1, padding:10, gap:1 });
    // container.getChildren().addAll(box1);
    //
    // const box2 = new VBox("Box2");
    // box2.setBounds({ color:'blue', radius:item.radius, border: 1, padding:10, gap:1 });
    // container.getChildren().addAll(box2);
    // //
    // const box3 = new VBox("Box3");
    // box3.setBounds({ color: 'yellow', radius:item.radius, border: 1, padding:10, gap:1 });
    // box2.getChildren().addAll(box3);
    //
    // box1.getChildren().addAll( new Button("in box1: Heck!"));
    // box2.getChildren().addAll( new Button("in box2: Heck!"));
    // box2.getChildren().addAll( new Button("in box2: Heck!"));
    // box3.getChildren().addAll( new Button("in box3: Heck!"));
    // box3.getChildren().addAll( new Button("in box3: Heck!"));
    // box3.getChildren().addAll( new Button("in box3: Heck!"));

    // setTimeout(x=>{
    // box3.getChildren().addAll( new Button("in box3: Heck!"));
    // }, 3_000)
    //
    // globalThis.xxx = ()=>{
    //   const firstWords = ["Quantum", "Warp", "Neural", "Photon", "Reality", "Chronos", "Stellar", "Event Horizon", "Anti-Gravity", "Nanobots"];
    //   const secondWords = ["Sync", "Drive", "Net", "Boost", "Shift", "Jump", "Nav", "Stabilizer", "Toggle", "Activation"];
    //   const text =  oneOf(firstWords) + ' ' + oneOf(secondWords);
    //   const chosen = oneOf([box1, box2, box3, container]);
    //   chosen.getChildren().addAll( new Button(text) );
    //   console.log(`Added a button to ${chosen.name}`, text);
    // };
    //
    //   setInterval(globalThis.xxx, 1_000)


    //
    //
    // const columns = new VBox();
    // columns.setBounds({ radius:item.radius, border: 1, padding:10, gap:1 });
    // container.getChildren().addAll(columns);
    //
    // const imageControls = new VBox();
    // imageControls.setBounds({ radius:item.radius, border: 1, padding:10, gap:1 });
    //
    // const portContainer = new VBox();
    // portContainer.setBounds({ radius:item.radius, border: 1, padding:10, gap:1 });
    //
    // columns.getChildren().addAll(imageControls);
    // columns.getChildren().addAll(portContainer);
    //
    //   imageControls.getChildren().addAll(new Button("I am the big image..."));
    //   portContainer.getChildren().addAll(new Label("a"));
    //   portContainer.getChildren().addAll(new Label("b"));
    //   portContainer.getChildren().addAll(new Label("c"));
    //   portContainer.getChildren().addAll(new Label("d"));
    //











      //
      // const caption = new Label(`Window Caption: ${item.type}`);
      // const button = new Button("I am a button!");
    //
    // const pod = new VBox();
    //
    // setTimeout(x=>{
    //   console.log('Bork!');
    //   container.getChildren().addAll(caption, button);
    //
    //   pod.setBounds({ radius:item.radius, border: 1, padding:10, gap:1 });
    //   pod.setData(item);
    //   container.getChildren().addAll(pod);
    //   pod.getChildren().addAll( new Button("Em I Overflowing Like Heck!"));
    //
    //
    // }, 500)
    //
    //
    // setTimeout(x=>{
    //   pod.getChildren().addAll(new Button("We Are In A Nested VBox"));
    // }, 1_000)
    //
    // setTimeout(x=>{
    //   pod.getChildren().addAll(new Button("At A Wrong-ish Y Coordinate"));
    // }, 2_000)
    //
    // setTimeout(x=>{
    //   pod.getChildren().addAll(new Button('Awesome'));
    // }, 3_000)
    //



    view.add( container );
    console.log(item, container.g);


      // const container = new Container(`container`);
      // container.setBounds({border:1, gap:1, radius:5, padding:0 , width: item.width||256});
      // container.setView(view);
      // container.setData(item);
      //
      //
      //
      // this.cleanup(item.observe('x', v=>update(container.group,{'transform':`translate(${v},${item.y})`} )));
      // this.cleanup(item.observe('y', v=>update(container.group,{'transform':`translate(${item.x},${v})`} )));
      //
      // const caption = new Caption(`caption`);
      // caption.setBounds({border:0, height: 32, radius: 3});
      // // caption.setBounds({border:1, height: 32, xwidth:'100%', radius:3});
      // container.add(caption)
      // //
      // const inputPod = new Pod(`inputPod`);
      // inputPod.setBounds({gap: 1, padding: 0, border:1, radius:3});
      // container.add(inputPod);
      //
      // const outputPod = new Pod(`outputPod`);
      // outputPod.setBounds({gap: 1, padding: 0, border:1, radius:3});
      // container.add(outputPod)
      // //
      // item.Output.forEach((portObject, index) => {
      //
      //   const row = new Row(`row{index}`);
      //   row.setBounds({});
      //   row.setData(portObject);
      //   outputPod.add(row);
      //
      //   const port = new Port(`port{index}`);
      //   port.setBounds({ height: 24, space:4, radius:7});
      //   port.setData({node:item, port:portObject});
      //   row.add(port);
      //
      // });
      // //
      // item.Input.forEach((portObject, index) => {
      //
      //   const row = new Row(`row{index}`);
      //   row.setBounds({});
      //   row.setData(portObject);
      //   inputPod.add( row )
      //
      //   const port = new Port(`port{index}`);
      //   port.setBehavior({showCaption:false});
      //   port.setBounds({radius:7});
      //   port.setData({node:item, port:portObject});
      //   row.add(port);
      //
      //   //NOTE: Editor is only used for input values, as outputs are computed.
      //   const editor = new Editor(`editor{index}`);
      //   editor.setBounds({space:10, height: 24, });
      //   editor.setData({node:item, port:portObject});
      //   port.add(editor);
      //
      // });
      //
      // container.setup();
      // container.render();
      //
      // this.cleanup(()=>container.stop());

  }

}
