import pick from 'lodash/pick';

import Branch from "./Branch.js";

export default class Standard {

	application;
	autojoin = true;
	separator = '. ';

	constructor(application) {
		this.application = application;
	}

	async resolve(connectable, session) {


		const response = {};
		for(const localPort of connectable.Input) {

			const connectionToProperty = this.application.Connections
				.filter(remoteConnector => remoteConnector.targetNode == connectable.id)
				.filter(remoteConnector => remoteConnector.targetPort == localPort.id)
				.filter(remoteConnector => remoteConnector.enabled)

			for(const connection of connectionToProperty) {
				const parentNode = this.application.Connectables.get(connection.sourceNode);
				const connectedPort = parentNode.Output.get(connection.sourcePort);
				if(!parentNode) throw new Error('Unable to locate parent node, could be an undeleted link in memory/data file');
				if(!connectedPort) throw new Error(`Unable to locate connected port "${connection.sourcePort}" in ${connection.sourceNode}`);

				session.depth++;
				session.location = session.location.create([connection.sourceNode, connection.sourcePort].join('::'), {})

					let result;
					result = await this.run(connection.sourceNode, connection.sourcePort, session);
					if(!response[localPort.id]) response[localPort.id] = [];
					response[localPort.id].push(result);

				session.location = session.location.parent;
				session.depth--;
			}

			if(response[localPort.id] && this.autojoin){
				response[localPort.id] = response[localPort.id].join(this.separator);
			}

		}
		return response;
	}

	async run(nodeId, portId, session = {initialized: false, tree: null, location: null, depth: 0, start: 0, visited: new Set() }) {

		if(!session.initialized){
			session.tree = new Branch();
			session.tree.id = [nodeId, portId].join('::');
			session.location = session.tree;
			session.initialized = true;
			console.log('>> EXECUTE <<');
		}

		if( session.visited.has([nodeId, portId].join('::')) ) {
			throw new Error('Infinite Loop');
		}

		session.visited.add([nodeId, portId].join('::'));

		console.log('  '.repeat(session.depth) + `Executing: ${nodeId}/${portId}`);
		const connectable = this.application.Connectables.get(nodeId);
		const outputPort = connectable.Output.find(item => item.id == portId)
		if(!outputPort) throw new Error(`Port id ${portId} was not found on node of type ${connectable.kind}`);

		const factoryValues = connectable.node;
		const editedInNodeValues = pick(connectable, Object.keys(factoryValues));
		const resolvedValues = { ...await this.resolve(connectable, session) }; // resolve new values for connectable
		const newContext = {session, ...factoryValues,  ...editedInNodeValues, ...resolvedValues };


		let response;
		response = await connectable.node[portId].bind(newContext)();

		// console.log(session.tree);
		// console.log(session.visited);
		return response;

	}

}
