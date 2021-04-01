export class Site {
  $el: any;

  constructor(selector) {
    this.$el = document.querySelector(selector);
  }

  public render(model) {
    for (const block of model) {
      this.$el.insertAdjacentHTML('beforeend', block.toHTML());
    }
  }
}
