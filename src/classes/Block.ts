import { ISiteBlockImageOptions, ISiteBlockTextOptions } from '../spec';

import { row, col, toCSS } from '../utils';

abstract class Block {
  value: string | string[];
  options: ISiteBlockTextOptions | ISiteBlockImageOptions;

  constructor(
    value: string | string[],
    options?: ISiteBlockTextOptions | ISiteBlockImageOptions
  ) {
    this.value = value;
    this.options = options;
  }

  public toHTML () {
    throw Error('Method toHTML is not implemented');
  }
}

export class TitleBlock extends Block {
  options: ISiteBlockTextOptions;

  constructor(value, options?: ISiteBlockTextOptions) {
    super(value, options);
  }

  public toHTML() {
    const { tag = 'h1', styles } = this.options || {};
    return row(col(`<${tag}>${this.value}</${tag}>`), toCSS(styles));
  }
}

export class TextBlock extends Block {
  options: ISiteBlockTextOptions;

  constructor(value: string, options?: ISiteBlockTextOptions) {
    super(value, options);
  }

  public toHTML() {
    return row(col(`<p>${this.value}</p>`));
  }
}

export class ColumnBlock extends Block {
  value: string[];
  options: ISiteBlockTextOptions;

  constructor(value: string[], options?: ISiteBlockTextOptions) {
    super(value, options);
  }

  public toHTML() {
    const { styles } = this.options || {};
    const columns = this.value.map(col).join('');
    return row(columns, toCSS(styles));
  }
}

export class ImageBlock extends Block {
  options: ISiteBlockImageOptions;

  constructor(value: string, options?: ISiteBlockImageOptions) {
    super(value, options);
  }

  public toHTML() {
    const { alt = '', imageStyles, styles } = this.options || {};
    return row(
      `<img src="${this.value}" alt="${alt}" style="${toCSS(imageStyles)}" />`,
      toCSS(styles)
    );
  }
}
