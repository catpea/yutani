import { v4 as uuid } from "uuid";

export default class Node {

  id = uuid();
  type = 'Node';

  x = 123;
  y = 345;

  input = "";

  executable = false;

  schema = null; // optional

  output(){
    return this.input;
  }

}
