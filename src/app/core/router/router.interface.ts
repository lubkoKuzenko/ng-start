import { Params } from '@angular/router';

export interface IRouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}
