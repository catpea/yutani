import List from "./List.js";

import Selected from "./Selected.js";

export default class Selection extends List {

  application = null;
  autostart = true;
  entity = Selected;

  constructor(application){
    super();
    this.application = application;
  }

}
