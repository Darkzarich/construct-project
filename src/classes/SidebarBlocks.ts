export default class SidebarBlocks {
  public static createTitleSidebarBlock() {
    return this._createSidebarForm(
      'title',
      [
        this._createSidebarInput('value'),
        this._createSidebarInput('styles'),
        this._createSidebarSelect('tag', ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
      ].join('')
    );
  }

  public static createTextSidebarBlock() {
    return this._createSidebarForm(
      'text',
      [
        this._createSidebarInput('value'),
        this._createSidebarInput('styles'),
      ].join('')
    );
  }

  public static createImageSidebarBlock() {
    return this._createSidebarForm(
      'image',
      [
        this._createSidebarInput('value'),
        this._createSidebarInput('styles'),
        this._createSidebarInput('imageStyles'),
      ].join('')
    );
  }

  public static createColumnSidebarBlock() {
    return this._createSidebarForm(
      'column',
      [
        this._createSidebarInput('col1'),
        this._createSidebarInput('col2'),
        this._createSidebarInput('col3'),
        this._createSidebarInput('styles'),
      ].join('')
    );
  }

  public static extractInputValue(event: any) {
    if (event.target.value) {
      return event.target.value.value;
    }

    const columns = [];
    const elColumns = event.target.querySelectorAll('input[name^="col"]')

    if (elColumns.length > 0) {
      for (const col of elColumns) {
        columns.push(col.value);
      }
    }

    return columns;
  }

  private static _createSidebarInput(name: string) {
    return `
      <div class="form-group mb-2">
        <input class="form-control form-control-sm" name="${name}" placeholder="${name}"></input>
      </div>
    `;
  }

  private static _createSidebarSelect(name: string, options: string[]) {
    return `
      <div class="form-group mb-2">
        <select required class="form-control form-control-sm" name="${name}" placeholder="${name}">
          ${options
            .map((opt) => `<option value="${opt}">${opt}</option>`)
            .join('')}
        </select>
      </div>
    `;
  }

  private static _createSidebarForm(type: string, inputFields: string): string {
    return `
    <form name="${type}" class="border-bottom mb-3 pb-2">
      <h5>${type}</h5>
      ${inputFields}
      <button type="submit" class="btn btn-primary btn-sm w-100">
        Create
      </button>
    </form>
    `;
  }
}
