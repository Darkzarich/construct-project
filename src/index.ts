import '../src/styles/main.css';

import { initialBlocks } from './model';

const site = document.querySelector('#site');

for (const block of initialBlocks) {
  site.insertAdjacentHTML('beforeend', block.toHTML());
}
