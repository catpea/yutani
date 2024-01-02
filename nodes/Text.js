import Node from "./Node.js";

export default class Text extends Node {

  text = "";

  output(){
    return this.text;
  }
  emphasis(){
    return this.text.toUpperCase();
  }

}
