import { html, svg, text, list, update, front } from "domek";

import Base from './Base.js';

//import { Removable } from './junction/Removable.js';
import { Focus } from './junction/Focus.js';
import { Selectable } from './junction/Selectable.js';
import { Connectable } from './node/port/Connectable.js';
import { Movable } from './junction/Movable.js';
import JunctionNode from '#nodes/Junction.js';

export default class Junction extends Base {

  start({item, view }){
    const {Keyboard, Api, Nodes, Selection, Cable} = view.application;

    // console.log('Junction UIitem', item);

    this.el.Group = svg.g();
    this.cleanup(item.observe('x',v=>update(this.el.Group, {'transform':`translate(${v},${item.y})`} )));
    this.cleanup(item.observe('y',v=>update(this.el.Group, {'transform':`translate(${item.x},${v})`} )));

    this.el.Junction = svg.circle({ class: 'junction-caption', cx: 0, cy: 0, r: 24 });
    this.el.OmniPort = svg.circle({ class: 'junction-port', cx: 0, cy: 0, r: 8 });

    this.el.OmniPort.dataset.portAddress = ['input', 'Junction', item.id, 'input'].join(':');

    this.el.Group.appendChild( this.el.Junction )
    this.el.Group.appendChild( this.el.OmniPort )

    const movable = new Movable({
      container: window,  // <g> element representing an SVG scene
         handle: this.el.Junction, // <rect> that is the caption of a window meant to be dragged
				   read: (property) => item[property],
          write: (property, value) =>item[property] = value,
    });
		this.cleanup(view.observe('transform', v=>movable.scale = v.scale));
		this.cleanup(()=>movable.stop());

    const selectable = new Selectable({
      handle: this.el.Junction,
      action: e=>{
        const selectingMultiple = Keyboard.isSelecting(e);
        if(selectingMultiple){
          Api.toggleSelect(item);
        }else{ // user simply chose a new selection
          Api.deselectAll();
          Api.toggleSelect(item);
        }
      }
    });
    this.cleanup(()=>selectable.stop());
    this.cleanup( view.application.Selection.observe('changed', ({data}) => {
			if(data.has(item.id)){
				this.el.Junction.classList.add('selected');
				this.el.OmniPort.classList.add('selected');
			}else{
				this.el.Junction.classList.remove('selected');
				this.el.OmniPort.classList.remove('selected');
			}
		}))

    const focus = new Focus({
      handle: this.el.Junction,
      action: e=>{
        front(this.el.Group)
      }
    });
    this.cleanup(()=>focus.stop());

    const connectable = new Connectable({
      container: window, // <g> element representing an SVG scene
      handle: this.el.OmniPort,
      canvas: view.scene,
      node: item,
      port: item.Output.get('output'),
      // createConnector: ({targetKind, targetType, sourceNode, sourcePort, targetNode, targetPort}) => {
      //   if(targetKind=='Input') view.application.Connectors.create({sourceType:'Junction', targetType, sourceNode, sourcePort, targetNode, targetPort })
      // },
      createConnector: ({ targetType, sourceNode, sourcePort, targetNode, targetPort }) => {
        view.application.Api.connect(sourceNode, sourcePort, targetNode, targetPort);
      },
      createJunction: ({x,y,  sourceNode, sourcePort}) => {
        // const junction = view.application.Junctions.create({  x,y });
        // const targetNode = junction.id;
        // const targetPort = junction.port('input').id;
        // view.application.Connectors.create({ sourceType:'Junction', targetType:'Junction' ,sourceNode, sourcePort, targetNode, targetPort });
        const junction = new JunctionNode();
        junction.x = x;
        junction.y = y;
        // console.log('junction.id',junction.id);
        view.application.Api.add(junction);
        const targetNode = junction.id;
        const targetPort = 'input';
        // console.log({sourceNode, sourcePort, targetNode, targetPort});
        view.application.Api.connect(sourceNode, sourcePort, targetNode, targetPort);
      },
    });
    this.cleanup(view.observe('transform', v=>connectable.scale = v.scale));
    this.cleanup(()=>connectable.stop());

    view.scene.appendChild( this.el.Group )

   } // start

}
