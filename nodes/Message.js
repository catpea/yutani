import Node from "./Node.js";

export default class Message extends Node {
  type = 'Display';
  text = 'Hello World';

  input = [];
  output(){
    return this.input;
  }
}
