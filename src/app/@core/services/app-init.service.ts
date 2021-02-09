import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class AppInitService {
  private _config: any;

  constructor(private http: HttpClient) {}

  load() {
    return new Promise<void>((resolve) => {
      // reset value
      this._config = null;

      return this.http
        .get("../../../assets/config.json")
        .toPromise()
        .then((data: any) => {
          this._config = data;
          resolve();
        })
        .catch((error: any) => {
          this._config = {};
          resolve();
        });
    });
  }

  get settings(): any {
    return this._config;
  }
}
