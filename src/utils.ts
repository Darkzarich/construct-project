export const row = (content: string, styles?: string): string => {
  return `<div class="row" style="${styles}">${content}</div>`;
};

export const col = (content: string): string => {
  return `<div class="col-sm">${content}</div>`;
};

export const toCSS = (styles: any = {}): string => {
  if (typeof styles === 'string') return styles;
  return Object.keys(styles)
    .map((prop) => `${prop}: ${styles[prop]};`)
    .join('');
};