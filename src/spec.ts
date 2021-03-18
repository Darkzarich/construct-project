export type ISiteBlocks = (ISiteBlockText | ISiteBlockColumn | ISiteBlockImage)[]

interface ISiteBlockTextOptions {
  options?: {
    tag?: string;
    styles?: {
      [key: string]: string
    };
  }
}
export interface ISiteBlockText extends ISiteBlockTextOptions{
  type: 'title' | 'text';
  value: string;
}
export interface ISiteBlockColumn extends ISiteBlockTextOptions {
  type: 'column';
  value: string[]
}

export interface ISiteBlockImage {
  type: 'image';
  src: string;
  options?: {
    styles?: {
      [key: string]: string
    };
    imageStyles?: {
      [key: string]: string
    };
    alt?: string;
  }
}