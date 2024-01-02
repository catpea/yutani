import Node from "./Node.js";

export default class Output extends Node {

  // NOTE: this will only return if nothing ovverides it.
  input = "Sorry, nothing was connected to me, so I return just the default output value."

  executable = true;
  output(){

    return this.input;

  }
}
