import List from "./List.js";

import Connectable from "./Connectable.js";

export default class Connectables extends List {

  application = null;
  autostart = true;
  entity = Connectable;

  constructor(application){
    super();
    this.application = application;
  }

}
