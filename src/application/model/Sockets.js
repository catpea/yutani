import List from "./List.js";

import Socket from "./Socket.js";

export default class Sockets extends List {

  application = null;
  autostart = true;
  entity = Socket;

  constructor(application){
    super();
    this.application = application;
  }

}
