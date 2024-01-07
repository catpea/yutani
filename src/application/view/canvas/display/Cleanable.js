


export default class Cleanable {
  // GARBAGE COLLECTION
  #trash = [];

  cleanup(...arg){
    this.#trash.push(...arg);
  }

  cleanupNow(){
    this.#trash.map(f=>f());
  }
}
