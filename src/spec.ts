export type ISiteBlocks = (ISiteBlockText | ISiteBlockColumn)[]
export interface ISiteBlockText {
  type: 'title' | 'text';
  value: string;
}

export interface ISiteBlockColumn {
    type: 'column';
    value: string[]
}