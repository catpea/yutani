import Item from "./Item.js";

export default class Connection extends Item {
  className = 'Connection';
  type = 'Connection';

  constructor(properties, application){
    super();
    const defaults = {x1:0, y1:1, x2:2, y2:3, enabled: true};
    this.inherit({...defaults, ...properties});
  }

}
