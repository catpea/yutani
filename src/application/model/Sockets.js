import List from "./List.js";

import Socket from "./Socket.js";

export default class Sockets extends List {

  application = null;
  autostart = true;
  entity = Socket;
  node;

  constructor(application, node){
    super();
    this.application = application;
    this.node = node;
  }

  create(item){
    const creation = super.create(item);
    creation.parent = this;
  }

}
