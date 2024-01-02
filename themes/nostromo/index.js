import Theme from '#themes/Theme.js';
import scss from './index.scss';

export default class Nostromo extends Theme {

  id = 'nostromo';
  panelBackground = 'blue';

  constructor(){
    super()
    // console.log(`${this.id} loaded`);
  }

}
