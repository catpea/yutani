import { v4 as uuid } from "uuid";

export default class Api {

	application;

	constructor(application) {
		this.application = application;
	}

	start() {

	}

	display() {
		if(this.application.Views.size() == 0) throw new Error('Unable to present content. No registered views are available for display.');
		this.application.Views.start();
	}

	getApplication() {
		return this.application;
	}




	//
	selectTheme(name) {
		this.application.Setup.theme = name;
		document.querySelector('html').dataset.uiTheme = name;
		console.info( 'dataset.uiTheme',  document.querySelector('html').dataset.uiTheme );
	}

	selectedTheme(name) {
		return this.application.Setup.theme;
	}


	add(node) {
		const decorated = this.application.Connectables.create(node);
		// this.selectOne(nodeInstance);
		return decorated;
	}

	connect(sourceNode, sourcePort, targetNode, targetPort) {
		const id = uuid();

		if(!sourceNode) throw new Error('sourceNode is required for making connections')
		if(!sourcePort) throw new Error('sourcePort is required for making connections')
		if(!targetNode) throw new Error('targetNode is required for making connections')
		if(!targetPort) throw new Error('targetPort is required for making connections')

		if(typeof sourceNode !== 'string') throw new Error('sourceNode must be a string id')
		if(typeof sourcePort !== 'string') throw new Error('sourcePort must be a string id')
		if(typeof targetNode !== 'string') throw new Error('targetNode must be a string id')
		if(typeof targetPort !== 'string') throw new Error('targetPort must be a string id')

		return this.application.Connections.create({
			id,
			sourceNode,
			targetNode,
			sourcePort,
			targetPort,
		});
	}

	async run(node, port = 'output') {

		const nodeNotSpecified = !node;
		if(nodeNotSpecified) throw new Error('you must specify node id');

		const stringIdRequired = (typeof node !== 'string');
		if(stringIdRequired) throw new Error('you must specify a string for node id');

		const result = await this.application.Execute.run(node, port);
		console.clear();
		console.log('usage.js RERUN api.execute said: ', result);
	}

	async runAll(node) {
		this.Connectables.filter(node => node.executable).forEach(async ({ id }) => {
			const result = await this.run(node);
			console.log('usage.js RERUN api.execute said: ', result);
		});
	}



	select(reference) {
		// NOTE: the selected object id is used as selection ID
		return this.application.Selection.create({ id: reference.id, itemClass: reference.className, reference });
	}
	toggleSelect(reference) {
		if(this.application.Selection.has(reference.id)) {
			return this.application.Selection.remove(reference.id);
		} else {
			return this.select(reference)
		}
	}
	deselect(item) {
		return this.application.Selection.remove(item.id);
	}
	deselectAll(item) {
		return this.application.Selection.forEach(({ id }) => this.application.Selection.remove(id));
	}


	removeSelected() {


		const { Selection, Connectables,  Connections } = this.application;

		// there are two kinds of items that can possibly be selected,
		// the Connections, and Connectables

		// if destroung a junction both to and from connections have to go:   ----O----
		Selection.filter(item => item.itemClass == 'Connectable').forEach(({ id }) => Connections.remove(link => link.sourceNode == id) );
		Selection.filter(item => item.itemClass == 'Connectable').forEach(({ id }) => Connections.remove(link => link.targetNode == id) );
		Selection.filter(item => item.itemClass == 'Connectable').forEach(({ id }) => Connectables.remove(id));
		// if destroyng a connector, just remove the connecor
		Selection.filter(item => item.itemClass == 'Connection').forEach(({ id }) => Connections.remove(id));

		this.deselectAll();

	}


	//
	//
	//
	//
	// select(reference) {
	// 	// NOTE: the selected object id is used as selection ID
	// 	return this.application.Selection.create({ id: reference.id, kind: reference.kind, reference });
	// }
	// toggleSelect(item) {
	// 	if(this.application.Selection.has(item.id)) {
	// 		return this.application.Selection.remove(item.id, true);
	// 	} else {
	// 		return this.application.Selection.create({ id: item.id, kind: item.kind, reference: item });
	// 	}
	// }
	// deselect(item) {
	// 	return this.application.Selection.remove(item.id, true);
	// }
	// deselectAll(item) {
	// 	return this.application.Selection.forEach(({ id }) => this.application.Selection.remove(id, true));
	// }
	// removeSelected() {
	// 	const { Selection, Nodes, Connectors, Junctions } = this.application;
	//
	// 	Selection.filter(item => item.kind == 'Junction').forEach(({ id }) => Connectors.destroy(link => link.sourceNode == id, true));
	// 	Selection.filter(item => item.kind == 'Junction').forEach(({ id }) => Connectors.destroy(link => link.targetNode == id, true));
	// 	Selection.filter(item => item.kind == 'Junction').forEach(({ id }) => Junctions.remove(id, true));
	//
	// 	Selection.filter(item => item.kind == 'Node').forEach(({ id }) => Connectors.destroy(link => link.sourceNode == id, true));
	// 	Selection.filter(item => item.kind == 'Node').forEach(({ id }) => Connectors.destroy(link => link.targetNode == id, true));
	//
	// 	Selection.filter(item => item.kind == 'Node').forEach(({ id }) => Nodes.remove(id, true));
	//
	// 	Selection.filter(item => item.kind == 'Connector').forEach(({ id }) => Connectors.remove(id, true));
	// 	Selection.clear(true);
	// }
	//
	// addNode(archetype, properties) {
	// 	// Procedure Step 1: create a node of the desired type in the reactive collection
	// 	const node = this.application.Nodes.create({ type: archetype, ...properties });
	// 	this.deselectAll();
	// 	this.select(node);
	// 	return node;
	// }
	//
	// addJunction(properties) {
	// 	const junction = this.application.Junctions.create(properties);
	// 	return junction;
	// }
	//
	// linkPorts(sourceNode, targetNode, options = {}) {
	// 	const { output: outputPort, input: inputPort } = Object.assign({ output: 'output', input: 'input' }, options);
	// 	const connector = { sourceNode: sourceNode.id, targetNode: targetNode.id, sourcePort: outputPort, targetPort: inputPort };
	// 	console.log({ connector });
	// 	return this.application.Connectors.create(connector);
	// }
	//
	//
	//
	//
	//
	//
	//
	// async execute(node, port = 'output') {
	// 	if(!node) throw new Error('you must specify which node to execute');
	// 	const output = await node.Execute.run(port);
	// 	// console.log(`Output on port ${port} of node ${node.id}`, output)
	// 	return output;
	// }
	//
	//
	//
	//
	//
	//
	//
	//
	//
	// clear() {
	// 	this.deselectAll();
	// 	for(const collectionName in data) {
	// 		this.application[collectionName].clear(true)
	// 	}
	// }
	//
	// load(data) {
	// 	this.deselectAll();
	// 	for(const collectionName in data) {
	// 		this.application[collectionName].clear(true)
	// 		data[collectionName].forEach(item => this.application[collectionName].create(item))
	// 	}
	// }
	//
	// save() {
	// 	const content = {
	// 		Junctions: this.application.Junctions.content.map(o => o.content),
	// 		Nodes: this.application.Nodes.content.map(o => o.content),
	// 		//TODO: Order is significant at the moment, connectors must be last, fix this by always executing node creation first and linker last
	// 		Connectors: this.application.Connectors.content.map(o => o.content),
	// 	}
	// 	return content;
	// }




}
