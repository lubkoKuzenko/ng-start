import { Injectable } from "@angular/core";
import { RouteReuseStrategy, ActivatedRouteSnapshot, DetachedRouteHandle } from "@angular/router";
/**
 * Based on Angular `DefaultRouteReuseStrategy`.
 * Reuses routes as long as their route config is the same OR until future route data has pattribute `noReuse: true`
 *
 * @example ```json
 *   {
 *       path: "overview",
 *       component: OverviewComponent,
 *        data: {
 *            noReuse: true,
 *        },
 *    },
 * ```
 */
@Injectable()
export class CustomReuseStrategy implements RouteReuseStrategy {
  public shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return false;
  }

  public store(route: ActivatedRouteSnapshot, detachedTree: DetachedRouteHandle): void {}

  public shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return false;
  }

  public retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    return null;
  }

  public shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    if (future.data && Boolean(future.data.noReuse)) {
      return !future.data.noReuse;
    }
    return future.routeConfig === curr.routeConfig;
  }
}
