import Node from "./Node.js";

export default class Junction extends Node {
  type = 'Junction';
  input = [];
  output(){
    return this.input;
  }
}
