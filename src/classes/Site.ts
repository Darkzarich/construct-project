import { ISiteBlocks } from '../spec';

export class Site {
  $el: any;

  constructor(selector: string) {
    this.$el = document.querySelector(selector);
  }

  public render(model: ISiteBlocks) {
    this.$el.innerHTML = '';
    for (const block of model) {
      this.$el.insertAdjacentHTML('beforeend', block.toHTML());
    }
  }
}
