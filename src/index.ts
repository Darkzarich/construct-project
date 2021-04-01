import '../src/styles/main.css';
import { Site } from './classes/Site';
import { Sidebar } from './classes/Sidebar';

import { initialBlocks } from './model';

const site = new Site('#site')

site.render(initialBlocks);

new Sidebar('#panel', (newSiteBlock) => {
  initialBlocks.push(newSiteBlock)
  site.render(initialBlocks);
});
