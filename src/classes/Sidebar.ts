import { createSidebarBlock } from '../utils';
import { TextBlock, TitleBlock } from './Block';

export class Sidebar {
  $el: any;
  updateCallback: (newSiteBlock) => void;

  constructor(selector: string, updateCallback) {
    this.$el = document.querySelector(selector);
    this.updateCallback = updateCallback;
    this.init();
  }

  private init(): void {
    this.$el.insertAdjacentHTML('afterbegin', this.template);
    this.$el.addEventListener('submit', this.addSiteBlock.bind(this));
  }

  get template(): string {
    return [createSidebarBlock('title'), createSidebarBlock('text')].join('');
  }

  private addSiteBlock(event: any) {
    event.preventDefault();

    const blockMapping = {
      title: TitleBlock,
      text: TextBlock,
    };

    if (!blockMapping[event.target.name]) {
      throw Error('Sidebar: Unknown block type');
    }

    const newBlock = new blockMapping[event.target.name](
      event.target.value.value,
      {
        styles: event.target.style.value,
      }
    );

    event.target.value.value = '';
    event.target.style.value = '';

    this.updateCallback(newBlock);
  }
}
