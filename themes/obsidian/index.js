import Theme from '#themes/Theme.js';
import scss from './index.scss';

export default class Obsidian extends Theme {

  id = 'obsidian';
  panelBackground = 'blue';

  constructor(){
    super()
    // console.log(`${this.id} loaded`);
  }

}
