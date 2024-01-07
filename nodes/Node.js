import { v4 as uuid } from "uuid";

export default class Node {

  id = uuid();
  type = 'Node';

  // All nodes in a visual programming language require x and y
  x = 123;
  y = 345;
  w = 320;
  h = 200;

  // System Properties
  executable = false;
  schema = null; // optional

  // Node Properties (Inputs (strings) and Outputs (functions))
  input = "";

  output(){
    return this.input;
  }

}
