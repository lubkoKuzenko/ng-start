import { Injectable } from '@angular/core';
import { RouterStateSerializer } from '@ngrx/router-store';
import { RouterStateSnapshot } from '@angular/router';
import { IRouterStateUrl } from './router.interface';

@Injectable()
export class RouterSerializer
  implements RouterStateSerializer<IRouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): IRouterStateUrl {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const {
      url,
      root: { queryParams }
    } = routerState;
    const { params } = route;

    return { url, params, queryParams };
  }
}
