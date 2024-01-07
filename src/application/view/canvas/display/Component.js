import Observable from "./Observable.js";


export default class Component extends Observable {
  debug = true;

  g; // svg group node to contain everything
  el = {}; // bag of elements

  root; // root container
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
    if(this.debug) this.design.color = 'magenta';
  }

  // GARBAGE COLLECTION

  #cleanup = [];
  cleanup(...arg){
    this.#cleanup.push(...arg);
  }



  // STATE ENCAPSULATION
  #layout; // layout manager APPLIES TO CHILDREN COMPONENTS ONLY

  setLayout(layout) {
    this.#layout = layout;
    this.#layout.container = this;
    return this;
  }

  getLayout() {
    return this.#layout;
  }



  // this is the node we are decorating
  // NOTE: it contains observables like X and Y
  data = {};

  setData(data) {
    this.data = data;
    return this;
  }
  getData() {
    return this.data;
  }

  // presets and default values
  design = {
    h: 0, // baseline H, this is just added, never changes
    gap: 1,
    border: 1,
    padding: 2,
    radius: 0,
    space: 0,
    color: '',
  }

  setDesign(data) {
    this.design = Object.assign(this.design, data);
    return this;
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
    console.log(`STARTING: ${this.name||this.text}`, this.traits);
    this.createElements(); //TODO: rename to create
    this.updateElements(); //TODO: rename to update
    this.appendElements(); //TODO: rename to append

    this.traits.forEach(trait=>trait.start());


    //NOTE: root container, handles its own X and Y,
    // it should be connected to the raw data node via observers
    // this means, only what is added to this container needs to have xywh set
    this.started = true; // Observable
  }

  stop() {
    this.traits.forEach(trait=>trait.stop());

    this.getLayout.stop();
    this.removeElements();
    this.#cleanup.map(f=>f());
    Object.values(this.el).map(el=>el.remove());
  }


  // TREE

  getRoot() {
    if(!this.container) return this;
    return this.container.getRoot();
  }


  // TRAITS/USE
  traits = [];
  use(trait){
    trait.parent = this;
    this.traits.push(trait);
    this.cleanup(this.observe('started', started=>{
      if(started) trait.start();
    }))
  }








  // VIEW RETRIEVAL (root only)
  view = null;

  setView(view) {
    this.view = view;
    return this;
  }
  getView() {
    return this.view;
  }

}