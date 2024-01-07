import oneOf from "oneof";
import { html, svg, text, list, update } from "domek";

import Base from './Base.js'; //TODO: Rename base to Renderer
import Window from "./display/Window.js";

export default class Display extends Base {

  start({item, view}){

    const window = new Window(item.type, {hMin:500, radius:4, gap:1});
    window.data = item; // data will now be available under .root.data
    window.view = view;
    view.add( window ); // adds the .g to the svg and .start()s the component

  }

}
