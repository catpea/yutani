import List from "./List.js";

export default class Views extends List {

  application = null;
  autostart = true;

  constructor(application){
    super();
    this.application = application;
  }

  select(idTheme){
    const instance = this.get(idTheme);
    document.querySelector('html').dataset.uiTheme = idTheme;
  }

}
