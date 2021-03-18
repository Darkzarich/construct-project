import '../src/styles/main.css';

import { ISiteBlocks } from './spec';

import { template } from './templates';

const initialBlocks: ISiteBlocks = [
  {
    type: 'title',
    value: 'Hello World',
  },
  {
    type: 'text',
    value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, ut?',
  },
  {
    type: 'column',
    value: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero neque voluptatem libero excepturi dignissimos, impedit consequuntur odio delectus adipisci sint architecto illo ex ipsam reiciendis dolore mollitia earum, minus ducimus.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero neque voluptatem libero excepturi dignissimos, impedit consequuntur odio delectus adipisci sint architecto illo ex ipsam reiciendis dolore mollitia earum, minus ducimus.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero neque voluptatem libero excepturi dignissimos, impedit consequuntur odio delectus adipisci sint architecto illo ex ipsam reiciendis dolore mollitia earum, minus ducimus.',
    ],
  },
  {
    type: 'image',
    src:
      'https://images.unsplash.com/photo-1454372182658-c712e4c5a1db?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHw%3D&w=1000&q=80',
  },
  {
    type: 'column',
    value: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero neque voluptatem libero excepturi dignissimos, impedit consequuntur odio delectus adipisci sint architecto illo ex ipsam reiciendis dolore mollitia earum, minus ducimus.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero neque voluptatem libero excepturi dignissimos, impedit consequuntur odio delectus adipisci sint architecto illo ex ipsam reiciendis dolore mollitia earum, minus ducimus.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero neque voluptatem libero excepturi dignissimos, impedit consequuntur odio delectus adipisci sint architecto illo ex ipsam reiciendis dolore mollitia earum, minus ducimus.',
    ],
  },
];

const site = document.querySelector('#site');

for (const block of initialBlocks) {
  if (template[block.type]) {
    const html = template[block.type](block as any);
    site.insertAdjacentHTML('beforeend', html);
  }
}
