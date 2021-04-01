import {TitleBlock, ColumnBlock, ImageBlock, TextBlock} from './classes/Block'

export type ISiteBlocks = (
  | TitleBlock
  | TextBlock
  | ColumnBlock
  | ImageBlock
)[];

export interface ISiteBlockTextOptions {
  tag?: string;
  styles?: {
    [key: string]: string;
  };
}

export interface ISiteBlockImageOptions {
  styles?: {
    [key: string]: string;
  };
  imageStyles?: {
    [key: string]: string;
  };
  alt?: string;
}
