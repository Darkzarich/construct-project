export type ISiteBlocks = (ISiteBlockText | ISiteBlockColumn | ISiteBlockImage)[]
export interface ISiteBlockText {
  type: 'title' | 'text';
  value: string;
  options?: {
    tag?: string;
    styles?: {
      [key: string]: string
    };
  }
}

export interface ISiteBlockImage {
  type: 'image';
  src: string;
}

export interface ISiteBlockColumn {
    type: 'column';
    value: string[]
    options?: {
      tag?: string;
      styles?: {
        [key: string]: string
      };
    }
}