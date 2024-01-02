import List from "./List.js";

import Archetype from "./Archetype.js";

export default class Archetypes extends List {

  application = null;
  autostart = true;
  entity = Archetype;

  constructor(application){
    super();
    this.application = application;
  }

}
