import List from "./List.js";

import Connection from "./Connection.js";

export default class Connections extends List {

  application = null;
  autostart = true;
  entity = Connection;

  constructor(application){
    super();
    this.application = application;
  }

}
