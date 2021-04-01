import '../src/styles/main.css';
import { Site } from './classes/Site';

import { initialBlocks } from './model';

const site = new Site('#site');

site.render(initialBlocks);
