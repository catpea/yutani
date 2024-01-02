import Output from '#nodes/Output.js';
import Midjourney from '#nodes/Midjourney.js';
import Text from '#nodes/Text.js';
import Canvas from './application/view/Canvas.js';

import Nostromo from '#themes/nostromo/index.js';
import Obsidian from '#themes/obsidian/index.js';

export default function(application) {

	//NOTE: archetype registration is necessary for toolbars and loading data from JSON (programmatic usage simply relies on raw Node objects)
	application.Archetypes.create({id:'Output', class:Output});
	application.Archetypes.create({id:'Text', class:Text});
	application.Archetypes.create({id:'Midjourney', class:Midjourney});

	application.Views.create({id:'view-1', selector:'#signalcraft-view-1'}, {entity:Canvas});

	application.Themes.create({}, {entity:Nostromo});
	application.Themes.create({}, {entity:Obsidian});
	application.Themes.select('nostromo');


}
