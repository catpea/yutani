import Item from "./Item.js";
import Sockets from "./Sockets.js";

export default class Connectable extends Item {
  className = 'Connectable'; // this is overriden by a specific type
  type = 'Connectable'; // this is overriden by a specific type
  node;

  constructor(node, application){
    super();
    this.node = node;

    const internalFields = ['id',  'type', 'x', 'y', 'executable', 'schema', 'omit'];

    const nodeContent = [
      // ['kind', node.constructor.name],
      ...Object.entries(node),
      ...Object.getOwnPropertyNames(Object.getPrototypeOf(node)).filter(name=>name!=='constructor').map(name=>[name, node[name]])
    ];

    const observables = nodeContent.filter(([key, value])=> typeof value !== 'function');
    const observablesObject = Object.fromEntries( observables );

    const properties = nodeContent.filter(([key, value])=> typeof value !== 'function').filter(([k,v])=>!internalFields.includes(k));
    const propertiesObject = Object.fromEntries( properties );

    const methods    = nodeContent.filter(([key, value])=> typeof value == 'function' ).filter(([k,v])=>!internalFields.includes(k));
    const methodsObject = Object.fromEntries(methods);

    // all of these are now reactive
    const defaults = {x:0, y:0};
    this.inherit({...defaults, ...observablesObject});

    // now sockets - reactive arrays representing X/Y coordinates, and anchors for data flow
    this.Input = new Sockets(application, node);
    this.Output = new Sockets(application, node);

    //NOTE: it is important to id the ports by their names as it makes data files more readable
    // properties.forEach( ([id])=> console.log(`Creating ${node.id} -> ${node.constructor.name}.${id}`) );
    properties.forEach( ([id])=>this.Input.create({id, type:'Input', x:0, y:0}) );
    methods.forEach( ([id])=>this.Output.create({id, type:'Output', x:0, y:0}) );

  }

}
