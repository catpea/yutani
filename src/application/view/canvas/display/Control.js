import oneOf from "oneof";

import Component from "./Component.js";

export default class Control extends Component {
  text = "";
  constructor(design) {
		super();
    if(design) this.setDesign(design);
    // there are easter eggs and easter bugs
    const a = ["Quantum", "Warp", "Neural", "Photon", "Reality", "Chronos", "Stellar", "Event Horizon", "Anti-Gravity", "Nanobots"];
    const b = ["Sync", "Drive", "Net", "Boost", "Shift", "Jump", "Nav", "Stabilizer", "Toggle", "Activation"];
    this.text = [oneOf(a), oneOf(b)].join(' '); // might want to override this, idk
  }

  // get x(){
  //   return 0
  //     + this.container.x
  //     + this.container.design.border
  //     + this.container.design.padding
  // }
  //
  // calculateY(){
  //
	// 		console.log(`YccccCALC: ${this.name} ABOVE`, this.above.map(o=>o.name), this.above.reduce((total, child) => total + (this.design.absolute ? 0 : child.height), 0));
  //
  //
  //   return 0
  //   + this.container.y
  //   + this.container.design.border
  //   + this.container.design.padding
  //
  //   + this.above.reduce((total, child) => total + (this.design.absolute?0:child.height),0)
  //   + ((this.container.design.gap*2) * this.above.length)
  // }
  //
  // get width(){
  //   if(this.design.width) return this.design.width;
  //   return 0
  //   + this.container.width
  //   /* REMOVE SPACE USED BY PARENT PADDING */ -( this.container.design.border + this.container.design.padding )*2
  //
  //   // + this.design.border
  //   // + this.design.padding
  // }
  //



}
