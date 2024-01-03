import { svg, update, front } from "domek";

import Component from "./Component.js";

import { Focus } from   "./caption/Focus.js";
import { Selectable } from   "./caption/Selectable.js";

export default class Container extends Component {

  setup(){
    this.el.Panel = svg.rect({
      class: 'node-container',
      ry: this.radius,
      width:this.width,
      x:this.x,
      y:this.y,
      height:this.height,
    });
    this.cleanup(()=>Object.values(this.el).map(el=>el.remove()));

    this.cleanup( this.view.application.Selection.observe('changed', ({data}) => {
      if(data.has(this.data.id)){
        this.el.Panel.classList.add('selected');
        front(this.group)
      }else{
        this.el.Panel.classList.remove('selected');
      }
    }))


    this.children.map(child=>child.setup())
  }

  render(){
    const {Keyboard, Api} = this.view.application;


    update(this.group, { 'transform': `translate(${this.data.x}, ${this.data.y})`, });
    this.view.scene.appendChild( this.group );

    this.group.appendChild( this.el.Panel )

    const focus = new Focus({
      handle: this.el.Panel,
      action: e=>{
        front(this.group)
      }
    });
    this.cleanup(()=>focus.stop());

    const selectable = new Selectable({
			handle: this.el.Panel,
			action: e=>{
				const selectingMultiple = Keyboard.isSelecting(e);
				if(selectingMultiple){
					Api.toggleSelect(this.data);
				}else{ // user simply chose a new selection
					Api.deselectAll();
					Api.toggleSelect(this.data);
				}
			}
		});
		this.cleanup(()=>selectable.stop());

    this.children.map(child=>child.render())
  }

  update(){
    update(this.el.Panel, {})
  }

}
