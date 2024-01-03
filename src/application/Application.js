import Api from './Api.js';
import Archetypes from './model/Archetypes.js';
import Connectables from './model/Connectables.js';
import Connections from './model/Connections.js';
import Selection from './model/Selection.js';
import Views from './model/Views.js';
import Themes from './model/Themes.js';
import Setup from './model/Setup.js';
import Basic from "./execute/Basic.js";


export default class Application {

  constructor() {

    this.Setup = new Setup({
      title: 'Signalcraft Visual Programming Language System',
      theme: 'nostromo',
    }, this);

    this.Keyboard = {
      isDeleting: e=>e.code=='Delete',
      isSelecting: e=>e.ctrlKey,
      doRun: e=>e.key=='Enter',
      doDisable: e=>e.key=='.',

      moveUp: e=>e.key=='ArrowUp',
      moveDown: e=>e.key=='ArrowDown',
      moveLeft: e=>e.key=='ArrowLeft',
      moveRight: e=>e.key=='ArrowRight',
    };

    this.Api          = new Api(this);
    this.Archetypes   = new Archetypes(this);
    this.Connectables = new Connectables(this);
    this.Connections  = new Connections(this);
    this.Selection    = new Selection(this);
    this.Views        = new Views(this);
    this.Themes       = new Themes(this);

    this.Execute = new Basic(this);

  }

  async start() {
    this.Api.start();
    this.Archetypes.start();
    this.Connectables.start();
    this.Connections.start();

    this.Setup.observe('title', v=> document.querySelector('title').innerText = v); // usage example
  }

  async stop() {
    this.Views.stop();
    this.Archetypes.stop();
    this.Connectables.stop();
    this.Connections.stop();
  }


}
