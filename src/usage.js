import Output from '../nodes/Output.js'
import Text from '../nodes/Text.js'
import Midjourney from '../nodes/Midjourney.js'

export default async function(api){

  const somePrompt = new Text();
  somePrompt.id = 'somePrompt';
  somePrompt.text = `Feminine. Cinematic shot, photoshoot, wideshot, epic.`;
  somePrompt.x = 0;
  somePrompt.y = 0;

  const highresPrompt1 = new Text();
  highresPrompt1.id = 'highresPrompt1';
  highresPrompt1.text = `By Enki Bilal with playlet transparent scaling elements, gold rivets, underneath we find strong zenith illumination from the right side of the shot j. scott campbell, rainbow silvertone, solarizing master, enamel, elfriede lohse-wächtler`;
  highresPrompt1.x = 10;
  highresPrompt1.y = 100;

  const highresPrompt2 = new Text();
  highresPrompt2.id = 'highresPrompt2';
  highresPrompt2.text = `Vivid skin texture, glowing eyes and long strait pastel lite-white-pink hair, subtle nuances , white face paint, red lipstick, beam of sunlight, chiaroscuro shadows, in the style of detailed hyperrealism photoshoot, mouth slightly open, pouting her lips, cf`;
  highresPrompt2.x = 10;
  highresPrompt2.y = 200;

  const highresPrompt3 = new Text();
  highresPrompt3.id = 'highresPrompt3';
  highresPrompt3.text = `Esoteric coded overlays.`;
  highresPrompt3.x = 10;
  highresPrompt3.y = 300;

  const midjourneyPrompt = new Midjourney();
  midjourneyPrompt.id = 'midjourneyPrompt';
  midjourneyPrompt.x = 400;
  midjourneyPrompt.y = 100;

  const outputNode = new Output();
  outputNode.id = 'outputNode';
  outputNode.x = 700;
  outputNode.y = 100;

  // setup relationships ---------------------------------------------------------------------------------------------------------------

  api.add(somePrompt);
  api.add(highresPrompt1);
  api.add(highresPrompt2);
  api.add(highresPrompt3);
  api.add(midjourneyPrompt);
  api.add(outputNode);

  api.connect(somePrompt.id, 'output',         midjourneyPrompt.id, 'prompt');
  api.connect(highresPrompt1.id, 'output',     midjourneyPrompt.id, 'style');
  const thirdPromptConnection = api.connect(highresPrompt2.id, 'emphasis',   midjourneyPrompt.id, 'style');
  thirdPromptConnection.enabled = false;
  api.connect(midjourneyPrompt.id, 'output',   outputNode.id, 'input');
 
  // execute your program -------------------------------------------------------------------------------------------------------------
  // const result = await api.run(outputNode.id);
  // console.log('usage.js api.execute said: ', result);



}
