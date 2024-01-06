import Observable from "./Observable.js";

export default class Component extends Observable {
  g;
  el = {};
  root;
  container;
  data = {};

  bounds = {
    x: 0,
    y: 0,
    width: 0,
    height: 1,
    gap: 0,
    border: 0,
    padding: 0,
    radius: 0,
    space: 0,
    color: '',
  }

  constructor() {
    super();
    this.declare('height', this.bounds.height); // this sets to 0
    this.declare('y', this.bounds.y); // this sets to 0
  }

  calculateWidth(){
    return;
  }
  calculateHeight(){
    return;
  }
  calculateX(){
    return;
  }
  calculateY(){
    return;
  }

  #cleanup = [];
  cleanup(...arg){
    this.#cleanup.push(...arg);
  }

  start(){
  }

  stop(){
  }

  setBounds(data) {
    for (const name in this.bounds) {
      if(data[name]) this.bounds[name] = data[name];
    }
    return this;
	}

  setData(data) {
    this.data = data;
    return this;
  }

}
