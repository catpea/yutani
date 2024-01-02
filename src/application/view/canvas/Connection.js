import { html, svg, text, list, update, dblclick } from "domek";
//import { Removable } from './cable/Removable.js';
import { Selectable } from './link/Selectable.js';
import Base from './Base.js';
import invariant from '#tools/invariant';

export default class Connection extends Base {

	start({ item, view }) {

		const { Keyboard, Api, Connectables, Connections, Selection, Cable } = view.application;

		// console.log(`YYYY Connector.start received the following item`, item.dump());

		const sourceNode = Connectables.get(item.sourceNode);
		invariant(item.sourceNode, `item.sourceNode must be a string value`, () => console.log(item), () => Connectables.dump(), () => Connections.dump());
		invariant(sourceNode, `Unable to locate node with id "${item.sourceNode}"`);

		const targetNode = Connectables.get(item.targetNode);
		invariant(targetNode, `Unable to locate targetNode with id "${item.targetNode}"`);
		invariant(sourceNode, `sourceNode (${item.sourceNode}) not found, datafile may contain links to nodes that have neen deleted`);
		invariant(targetNode, `targetNode (${item.targetNode}) not found, datafile may contain links to nodes that have neen deleted`);

		const sourcePort = sourceNode.Output.get(item.sourcePort);
		const targetPort = targetNode.Input.get(item.targetPort);

		if([sourceNode, targetNode, sourcePort, targetPort].some(o => o == undefined)) {
			console.log('MISSING DATA', item, { sourceNode, targetNode, sourcePort, targetPort });
		}

		if(!targetPort) {
			console.error(`Connectable "${item.targetNode}" did not have Input named "${item.targetPort}"`)
			console.log(item.targetNode, targetNode);
			throw new Error('targetPort not found')
		}

		let x1 = sourceNode.x + sourcePort.x;
		let y1 = sourceNode.y + sourcePort.y;
		let x2 = targetNode.x + targetPort.x;
		let y2 = targetNode.y + targetPort.y;

		this.el.CableZone = svg.line({
			class: 'user-interface cable-line-zone',
			x1,
			y1,
			x2,
			y2,
			strokeLinecap: 'round',
			// vectorEffect: 'non-scaling-stroke',
		});

		this.el.Cable = svg.line({
			class: 'cable-line',
			style: 'pointer-events: none;', // NOTE: we must disable this line, to let CableZone fully take over
			x1,
			y1,
			x2,
			y2,
			// stroke: "white",
			// fill: 'red',
			// 'width': 5,
			// 'stroke-width': 5,
			strokeLinecap: 'round',
			vectorEffect: 'non-scaling-stroke',
		});

		this.cleanup(() => Object.values(this.el).map(el => el.remove()));

		this.cleanup(sourceNode.observe('x', (v) => update([this.el.Cable, this.el.CableZone], { x1: v + sourcePort.x })));
		this.cleanup(sourceNode.observe('y', (v) => update([this.el.Cable, this.el.CableZone], { y1: v + sourcePort.y })));

    this.cleanup(targetNode.observe('x', (v) => update([this.el.Cable, this.el.CableZone], { x2: v + targetPort.x })));
		this.cleanup(targetNode.observe('y', (v) => update([this.el.Cable, this.el.CableZone], { y2: v + targetPort.y })));

		view.scene.insertBefore(this.el.Cable, view.scene.firstChild.nextSibling);
		view.scene.insertBefore(this.el.CableZone, view.scene.firstChild.nextSibling);

		this.cleanup(dblclick(this.el.CableZone, (e) => {
			// e.preventDefault();
			e.stopPropagation();
		}));



    this.cleanup(item.observe('enabled', (v) => {
      if(v){
        this.el.Cable.classList.add('enabled');
        this.el.Cable.classList.remove('disabled');

      }else{
        this.el.Cable.classList.add('disabled');
        this.el.Cable.classList.remove('enabled');
      }
    } ));

		const selectable = new Selectable({
			handle: this.el.CableZone,
			action: e => {
				const selectingMultiple = Keyboard.isSelecting(e);
				if(selectingMultiple) {
					Api.toggleSelect(item);
				} else { // user simply chose a new selection
					Api.deselectAll();
					Api.toggleSelect(item);
				}
			}
		});
		this.cleanup(() => selectable.stop());


		this.cleanup(Selection.observe('changed', ({ data }) => {
			if(data.has(item.id)) {
				this.el.Cable.classList.add('selected');
				this.el.CableZone.classList.add('selected');
			} else {
				this.el.Cable.classList.remove('selected');
				this.el.CableZone.classList.remove('selected');
			}
		}))

	} // start

}
