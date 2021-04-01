export const row = (content: string, styles?: string): string => {
  return `<div class="row" style="${styles}">${content}</div>`;
};

export const col = (content: string): string => {
  return `<div class="col-sm">${content}</div>`;
};

export const toCSS = (styles: any = {}): string => {
  if (typeof styles === 'string') return styles
  return Object.keys(styles)
    .map((prop) => `${prop}: ${styles[prop]};`)
    .join('');
};

export const createSidebarBlock = (type: string): string => {
  return `
    <form name="${type}">
        <h5>${type}</h5>
        <div class="form-group mb-2">
            <input class="form-control form-control-sm" name="value" placeholder="value"></input>
        </div>
        <div class="form-group mb-2">
            <input class="form-control form-control-sm" name="style" placeholder="styles"></input>
        </div>
        <button type="submit" class="btn btn-primary btn-sm">
            Create
        </button>
    </form>
    `;
};
