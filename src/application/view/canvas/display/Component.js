import { Layout } from "./Layout.js";

import Observable from "./Observable.js";


export default class Component extends Observable {
  DEBUG = false;

  g; // svg group node to contain everything
  el = {}; // bag of elements

  container; // parent container

  // these are observables and will be declared in the constructor
  x;
  y;
  w;
  h;

  constructor() {
    super();

    this.declare('started', false); // this sets to 0

    this.declare('x', 0); // this sets to 0
    this.declare('y', 0); // this sets to 0
    this.declare('w', 320); // this sets to 0
    this.declare('h', 200); // this sets to 0

    // this.declare('y', this.bounds.y); // this sets to 0
    if(this.DEBUG) this.design.color = 'magenta';
  }





  // STATE ENCAPSULATION
  #layout;
  get layout(){
    return this.#layout;
  }
  set layout(layout){
    if(!Layout.prototype.isPrototypeOf(layout)) throw new Error('Layout manager must be a descendant of Layout.');
    this.#layout = layout;
    this.#layout.container = this;
    return this;
  }



  // STATE ENCAPSULATION
  // this is the node we are decorating
  // NOTE: it contains observables like X and Y
  #data = {};
  set data(data) {
    this.#data = data;
    return this;
  }
  get data() {
    return this.#data;
  }


  // STATE ENCAPSULATION
  // presets and default values
  #design = {
    h: 0, // baseline H, this is just added, never changes
    gap: 1,
    border: 1,
    padding: 2,
    radius: 0,
    space: 0,
    color: '',
  }
  set design(data) {
    this.#design = Object.assign(this.#design, data);
    return this;
  }
  get design() {
    return this.#design;
  }




  // DRAWING
  createElements(){
    // OVERLOAD
  }
  updateElements(){
    // OVERLOAD
  }

  appendElements(){
    Object.values(this.el).forEach(el => this.g.appendChild(el));
  }
  removeElements(){
    Object.values(this.el).forEach(el => el.remove());
  }




  // LIFECYCLE
  start() {
    // console.log(`STARTING: ${this.name||this.text}`, this.traits);
    this.createElements(); //TODO: rename to create
    this.updateElements(); //TODO: rename to update
    this.appendElements(); //TODO: rename to append

    this.#traits.forEach(trait=>trait.start());


    //NOTE: root container, handles its own X and Y,
    // it should be connected to the raw data node via observers
    // this means, only what is added to this container needs to have xywh set
    this.started = true; // Observable
  }

  stop() {
    this.#traits.forEach(trait=>trait.stop());

    this.getLayout.stop();
    this.removeElements();
    this.cleanupNow();
    Object.values(this.el).map(el=>el.remove());
  }


  // TREE
  get isRoot(){
    return !this.container;
  }

  get root() {
    let response = null;
    if(this.isRoot){
      response = this;
    }else{
    response = this.container.root;
    }
    return response;
  }


  // TRAITS/USE
  #traits = [];
  use(trait){
    trait.parent = this;
    this.#traits.push(trait);
    this.cleanup(this.observe('started', componentStarted=>{
      if(componentStarted) trait.start();
    }))
  }







  // STATE ENCAPSULATION
  // VIEW RETRIEVAL (root only)
  #view = null;
  set view(view) {
    this.#view = view;
    return this;
  }
  get view() {
    return this.#view;
  }

}
