import { ISiteBlockText, ISiteBlockColumn, ISiteBlockImage } from './spec';

import { row, col, toCSS } from './utils';

const title = (block: ISiteBlockText) => {
  const {tag = 'h1', styles} = block.options;
  return row(col(`<${tag}>${block.value}</${tag}>`), toCSS(styles));
};

const text = (block: ISiteBlockText) => {
  return row(col(`<p>${block.value}</p>`));
};

const column = (block: ISiteBlockColumn) => {
  const columns = block.value.map(col).join('');
  return row(columns);
};

const image = (block: ISiteBlockImage) => {
  return row(`<img src="${block.src}" />`);
};

export const template = {
  title,
  text,
  column,
  image,
};
