import oneOf from "oneof";
import { html, svg, text, list, update } from "domek";

import Base from './Base.js';

import Container from "./node/Container.js";
import Caption from "./node/Caption.js";
import Pod from "./node/Pod.js";
import Row from "./node/Row.js";
import Port from "./node/Port.js";
import Editor from "./node/Editor.js";

export default class Node extends Base {

  start({item, view}){

      const container = new Container(`container`);
      container.setBounds({border:1, gap:1, radius:5, padding:0 , width: item.width||256});
      container.setView(view);
      container.setData(item);



      this.cleanup(item.observe('x', v=>update(container.group,{'transform':`translate(${v},${item.y})`} )));
      this.cleanup(item.observe('y', v=>update(container.group,{'transform':`translate(${item.x},${v})`} )));

      const caption = new Caption(`caption`);
      caption.setBounds({border:0, height: 32, radius: 3});
      // caption.setBounds({border:1, height: 32, xwidth:'100%', radius:3});
      container.add(caption)
      //
      const inputPod = new Pod(`inputPod`);
      inputPod.setBounds({gap: 1, padding: 0, border:1, radius:3});
      container.add(inputPod);

      const outputPod = new Pod(`outputPod`);
      outputPod.setBounds({gap: 1, padding: 0, border:1, radius:3});
      container.add(outputPod)
      //
      item.Output.forEach((portObject, index) => {

        const row = new Row(`row{index}`);
        row.setBounds({});
        row.setData(portObject);
        outputPod.add(row);

        const port = new Port(`port{index}`);
        port.setBounds({ height: 24, space:4, radius:7});
        port.setData({node:item, port:portObject});
        row.add(port);

      });
      //
      item.Input.forEach((portObject, index) => {

        const row = new Row(`row{index}`);
        row.setBounds({});
        row.setData(portObject);
        inputPod.add( row )

        const port = new Port(`port{index}`);
        port.setBehavior({showCaption:false});
        port.setBounds({radius:7});
        port.setData({node:item, port:portObject});
        row.add(port);

        //NOTE: Editor is only used for input values, as outputs are computed.
        const editor = new Editor(`editor{index}`);
        editor.setBounds({space:10, height: 24, });
        editor.setData({node:item, port:portObject});
        port.add(editor);

      });

      container.setup();
      container.render();

      this.cleanup(()=>container.stop());

  }

}
