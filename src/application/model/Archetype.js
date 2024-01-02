import Item from "./Item.js";

export default class Archetype extends Item {

  constructor(properties, application){
    super();
    this.inherit(properties);
  }

}
