import Item from "./Item.js";

export default class Socket extends Item {
  application;
  parent; // parent list (Sockets)

  constructor(properties, application){
    super();
    this.inherit(properties);
    this.application =  application;
  }

  incoming(){
    return this.application.Connections
    .filter(remoteConnector => remoteConnector.targetNode == this.parent.node.id)
    .filter(remoteConnector => remoteConnector.targetPort == this.id)
  }
  outgoing(){
    return this.application.Connections
    .filter(remoteConnector => remoteConnector.sourceNode == this.parent.node.id)
    .filter(remoteConnector => remoteConnector.sourcePort == this.id)
  }

}
