import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

import { environment } from '@env/environment';
import { IRouterStateUrl } from './router/router.interface';

export interface IAppState {
  router: RouterReducerState<IRouterStateUrl>;
}

export const reducers: ActionReducerMap<IAppState> = {
  router: routerReducer
};

export const metaReducers: Array<
  MetaReducer<IAppState>
> = !environment.production ? [] : [];
