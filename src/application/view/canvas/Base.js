export default class Base {

  el={};

  #cleanup = [];

  cleanup(...arg){
    this.#cleanup.push(...arg);
  }

  start ({item, view}){
  }

  stop (){
    this.#cleanup.map(f=>f());
    Object.values(this.el).map(el=>el.remove());
  }

}
