import { ISiteBlockText, ISiteBlockColumn, ISiteBlockImage } from './spec';

import { row, col, toCSS } from './utils';

const title = (block: ISiteBlockText) => {
  const { tag = 'h1', styles } = block.options || {};
  return row(col(`<${tag}>${block.value}</${tag}>`), toCSS(styles));
};

const text = (block: ISiteBlockText) => {
  return row(col(`<p>${block.value}</p>`));
};

const column = (block: ISiteBlockColumn) => {
  const { styles } = block.options || {};
  const columns = block.value.map(col).join('');
  return row(columns, toCSS(styles));
};

const image = (block: ISiteBlockImage) => {
  const { alt = '', imageStyles, styles } = block.options || {};
  return row(
    `<img src="${block.src}" alt="${alt}" style="${toCSS(imageStyles)}" />`,
    toCSS(styles)
  );
};

export const template = {
  title,
  text,
  column,
  image,
};
