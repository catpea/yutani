import panzoom from "panzoom";
import calculatePercent from 'calculate-percent';
import { html, svg, text, list, update, keyboard, click } from "domek";
import { v4 as uuid } from "uuid";

import Item from '../model/Item.js';

import Node from './canvas/Node.js';
import Junction from './canvas/Junction.js';
import Connection from './canvas/Connection.js';

import Display from './canvas/Display.js';

export default class Canvas extends Item {

  application;
  element;

  svg;
  defs;
  scene;
  bg;

  renderers = new Map();

  constructor(properties, application){
    super();
    this.application = application;
    this.inherit({transform:{}, ...properties});
    this.element = document.querySelector(this.selector);
    // console.log(this.element);
    // SETUP
    this.installScene();
    this.installKeyboardShortcuts();
    this.installPanZoom();
    this.installDataMonitor();
    // console.log('Canvas Configured');
  }

  installScene(){
    this.svg = this.element.appendChild(svg.svg({class:"editor-interface", width:'100%', height:'95vh' }));
    this.defs = this.svg.appendChild(svg.defs());
    this.scene = this.svg.appendChild(svg.g());
    this.bg = this.scene.appendChild(svg.rect({ class: 'interface-background', x: 0, y: 0, width: 11_000, height: 8_500, }));
  }

  installKeyboardShortcuts(){

    this.cleanup(keyboard( e=>this.application.Keyboard.isDeleting(e), ()=>this.application.Api.removeSelected() ));
    this.cleanup(keyboard( e=>this.application.Keyboard.doRun(e), ()=> this.application.Connectables.filter(o=>o.executable).forEach(o=>this.application.Api.run(o.id))   ));
    this.cleanup(keyboard( e=>this.application.Keyboard.doDisable(e), ()=> this.application.Selection.forEach(({id})=> { this.application.Connections.get(id).enabled = !this.application.Connections.get(id).enabled } )   ));

    this.cleanup(keyboard( e=>this.application.Keyboard.moveUp(e), ()=>this.application.Api.moveUp() ));
    this.cleanup(keyboard( e=>this.application.Keyboard.moveDown(e), ()=>this.application.Api.moveDown() ));
    this.cleanup(keyboard( e=>this.application.Keyboard.moveLeft(e), ()=>this.application.Api.moveLeft() ));
    this.cleanup(keyboard( e=>this.application.Keyboard.moveRight(e), ()=>this.application.Api.moveRight() ));

    this.cleanup(click(this.bg, ()=>this.application.Api.deselectAll() ));
  }

  installPanZoom(){
    this.panzoom = panzoom(this.scene, {
			smoothScroll: false, // this is the sluggish post  scrolling effect
			// transformOrigin: { x: 0.5, y: 0.5 },
			maxZoom: 100,
			minZoom: 0.01,
			initialX: 0,
			initialY: 0,
			// initialZoom: .5,
			filterKey: function(/* e, dx, dy, dz */) {
				 // don't let panzoom handle this event:
				 return true;
			},


			beforeMouseDown: function(e) {

				const DENY = true;
				if(!e.target.classList.contains('interface-background')) return DENY;
				if(e.target.classList.contains('user-interface')) return DENY;

			}
		});
		this.panzoom.on('transform', (e) => {
			const { x, y, scale } = this.panzoom.getTransform();
			this.transform = { x, y, scale };
		});
		this.cleanup(()=>this.panzoom.dispose());
  }

  installDataMonitor(){
    this.application.Connectables.observe('created', v=>this.displayConnectable(v), {autorun: false})
    this.application.Connectables.observe('removed', v=>this.disposeConnectable(v), {autorun: false})

    this.application.Connections.observe('created', v=>this.displayConnection(v), {autorun: false})
    this.application.Connections.observe('removed', v=>this.disposeConnection(v), {autorun: false})
  }

	displayConnectable({ item }) {
    const types = [Node, Junction,  Display]; //NOTE: multiple component classes are supported, and new ones should be added
    const Component = types.find(o=>o.name==item.type);
		const connectable = new Component();
		this.renderers.set(item.id, connectable);
		connectable.start({ item, view: this });
	}
  disposeConnectable({ item }) {
		this.renderers.get(item.id).stop();
	}

	displayConnection({ item }) {
    const types = [Connection]; //NOTE: multiple component classes are supported, and new ones should be added
    const Component = types.find(o=>o.name==item.type);
		const connectable = new Component();
		this.renderers.set(item.id, connectable);
		connectable.start({ item, view: this });
	}
  disposeConnection({ item }) {
		this.renderers.get(item.id).stop();
	}


  add(component){
    this.scene.appendChild( component.g );
    component.start();
  }
  // add(composite){
  //   console.log(composite);
  //   composite.start();
  //   this.scene.appendChild( composite.container.g );
  // }

}
