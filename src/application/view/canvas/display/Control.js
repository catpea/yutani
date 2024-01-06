import Component from "./Component.js";

export default class Control extends Component {

  get above(){
    const selfIndex = this.container.getChildren().indexOf(this);
    return this.container.getChildren().slice(0, selfIndex );
  }

  get x(){
    return 0
      + this.container.x
      + this.container.bounds.border
      + this.container.bounds.padding
  }

  calculateY(){

			console.log(`YccccCALC: ${this.name} ABOVE`, this.above.map(o=>o.name), this.above.reduce((total, child) => total + (this.bounds.absolute ? 0 : child.height), 0));


    return 0
    + this.container.y
    + this.container.bounds.border
    + this.container.bounds.padding

    + this.above.reduce((total, child) => total + (this.bounds.absolute?0:child.height),0)
    + ((this.container.bounds.gap*2) * this.above.length)
  }

  get width(){
    if(this.bounds.width) return this.bounds.width;
    return 0
    + this.container.width
    /* REMOVE SPACE USED BY PARENT PADDING */ -( this.container.bounds.border + this.container.bounds.padding )*2

    // + this.bounds.border
    // + this.bounds.padding
  }



  stop() {
    this.removeElements();
  }
  removeElements(){
    Object.values(this.el).forEach(el => el.remove());
  }

}
