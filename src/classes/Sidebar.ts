import { ColumnBlock, ImageBlock, TextBlock, TitleBlock } from './Block';
import SidebarBlocks from './SidebarBlocks'

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
    this.$el.addEventListener('submit', (e: any) => {
      this.addSiteBlock(e);
    });
  }

  get template(): string {
    return [
      SidebarBlocks.createTitleSidebarBlock(),
      SidebarBlocks.createTextSidebarBlock(),
      SidebarBlocks.createImageSidebarBlock(),
      SidebarBlocks.createColumnSidebarBlock()
    ].join('');
  }

  private addSiteBlock(event: any) {
    event.preventDefault();

    const blockMapping = {
      title: TitleBlock,
      text: TextBlock,
      image: ImageBlock,
      column: ColumnBlock
    };

    if (!blockMapping[event.target.name]) {
      throw Error('Sidebar: Unknown block type');
    }

    const blockData = {
      value: SidebarBlocks.extractInputValue(event),
      options: {}
    }

    const optionsForm = new FormData(event.target);

    for (const pair of optionsForm.entries()) {
      if (pair[0] !== 'value') {
        blockData.options[pair[0]] = pair[1]
      }
      event.target[pair[0]].value = '';
    }

    const newBlock = new blockMapping[event.target.name](
      blockData.value,
      blockData.options
    );

    this.updateCallback(newBlock);
  }
}
