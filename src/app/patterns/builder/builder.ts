interface Query {
  root: string;
  pagination: string;
  filter: string;
  sort: string;
}

export class Builder {
  private _query: Query = new Object() as Query;

  // https://localhost:8080/
  // ?page[limit]=100&page[offset]=0
  // &filter=(backupTime ge 2022-12-14T06:00:00.000Z)
  // and (backupTime le 2022-12-21T06:02:31.000Z)
  // and (clientName eq 'vragit5940.rsv.ven.veritas.com')
  // and (policyType eq 'MS-WINDOWS')
  // and (contains(name, 'asd'))
  // and (startswith(path, '/'))
  // and (scheduleType eq 'NOT_ARCHIVE')
  // &sort=lastBackupTime

  constructor() {
    this._query = {
      root: "https://localhost:8080/",
      pagination: "",
      filter: "",
      sort: "",
    };
  }

  public addRoot() {
    this._query.root = "https://localhost:8080/";
    return this;
  }

  public addPagination(limit: number, offset: number) {
    this._query.pagination = `?page[limit]=${limit}&page[offset]=${offset}`;
    return this;
  }

  public addFilter(filter: { backupTimeMin?: Date; backupTimeMax?: Date; clientName?: string; scheduleType?: string }) {
    this._query.filter = "?filter=";

    if (filter.backupTimeMin) {
      this._query.filter = `${this._query.filter}(backupTime ge ${filter.backupTimeMin}) `;
    }

    if (filter.backupTimeMin) {
      this._query.filter = `${this._query.filter} and (backupTime le ${filter.backupTimeMax}) `;
    }

    if (filter.clientName) {
      this._query.filter = `${this._query.filter} clientName eq '${filter.clientName}') `;
    }

    if (filter.scheduleType) {
      this._query.filter = `${this._query.filter} and (scheduleType eq '${filter.scheduleType}') ) `;
    }

    return this;
  }

  public addSort(properties: string[]) {
    this._query.sort = `&sort=${properties.join(",")}`;
    return this;
  }

  public build(): string {
    return `${this._query.root}${this._query.pagination}${this._query.filter}${this._query.sort}`;
  }
}
