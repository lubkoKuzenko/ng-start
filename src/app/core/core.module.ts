import { NgModule, Optional, SkipSelf, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule, ActionReducerMap, MetaReducer } from '@ngrx/store';
import {
  StoreRouterConnectingModule,
  RouterReducerState,
  routerReducer,
  RouterStateSerializer
} from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '@env/environment';
import { IRouterStateUrl, RouterSerializer } from './router-state-serializer';
import { TokenInterceptor } from './http-interceptors/http-token.interceptor';
import { AppErrorInterceptor } from './http-interceptors/http-error.interseptor';

export interface IAppState {
  router: RouterReducerState<IRouterStateUrl>;
}

export const reducers: ActionReducerMap<IAppState> = {
  router: routerReducer
};

export const metaReducers: Array<
  MetaReducer<IAppState>
> = !environment.production ? [] : [];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,

    // ngrx
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot(),
    // EffectsModule.forRoot([]),
    environment.production
      ? []
      : StoreDevtoolsModule.instrument({ name: 'Angular NgRx Store' })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: ErrorHandler,
      useClass: AppErrorInterceptor
    },
    {
      provide: RouterStateSerializer,
      useClass: RouterSerializer
    }
  ]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
