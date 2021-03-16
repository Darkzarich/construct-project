export interface ISiteBlockText {
  type: 'title' | 'text';
  value: string;
}

export interface ISiteBlockColumn {
    type: 'column';
    value: ISiteBlockColumnItem[]
}

export interface ISiteBlockColumnItem {
    value: string;
}