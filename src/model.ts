import { ISiteBlocks } from './spec';

import {
  TitleBlock,
  TextBlock,
  ColumnBlock,
  ImageBlock,
} from './classes/Block';

export const initialBlocks: ISiteBlocks = [
  new TitleBlock('Some very important title', {
    tag: 'h2',
    styles: {
      'margin-left': '2rem',
    },
  }),
  new TitleBlock('...this is important too but less...', {
    tag: 'h4',
    styles: {
      'font-style': 'italic',
      'margin-left': '3rem',
      color: '#b0bec5',
    },
  }),
  new TextBlock(
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, ut?'
  ),
  new ColumnBlock(
    [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero neque voluptatem libero excepturi dignissimos, impedit consequuntur odio delectus adipisci sint architecto illo ex ipsam reiciendis dolore mollitia earum, minus ducimus.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero neque voluptatem libero excepturi dignissimos, impedit consequuntur odio delectus adipisci sint architecto illo ex ipsam reiciendis dolore mollitia earum, minus ducimus.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero neque voluptatem libero excepturi dignissimos, impedit consequuntur odio delectus adipisci sint architecto illo ex ipsam reiciendis dolore mollitia earum, minus ducimus.',
    ],
    {
      styles: {
        background: 'linear-gradient(to bottom, #547683, #5e92c0);',
        padding: '2rem',
        color: 'white',
      },
    }
  ),
  new ImageBlock(
    'https://images.unsplash.com/photo-1454372182658-c712e4c5a1db?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHw%3D&w=1000&q=80',
    {
      imageStyles: {
        width: '500px',
        'border-radius': '20px;',
      },
      alt: 'picture',
      styles: {
        background: '#5e90bb',
        'justify-content': 'center',
        display: 'flex',
        padding: '2rem',
      },
    }
  ),
  new ColumnBlock(
    [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero neque voluptatem libero excepturi dignissimos, impedit consequuntur odio delectus adipisci sint architecto illo ex ipsam reiciendis dolore mollitia earum, minus ducimus.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero neque voluptatem libero excepturi dignissimos, impedit consequuntur odio delectus adipisci sint architecto illo ex ipsam reiciendis dolore mollitia earum, minus ducimus.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero neque voluptatem libero excepturi dignissimos, impedit consequuntur odio delectus adipisci sint architecto illo ex ipsam reiciendis dolore mollitia earum, minus ducimus.',
    ],
    {
      styles: {
        background: 'linear-gradient(to top, #547683, #5e92c0);',
        padding: '2rem',
        color: 'white',
      },
    }
  ),
];
