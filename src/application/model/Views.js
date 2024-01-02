import List from "./List.js";

export default class Views extends List {

  application = null;
  autostart = true;

  constructor(application){
    super();
    this.application = application;
  }

}
