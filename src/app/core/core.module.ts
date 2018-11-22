import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { httpInterceptorProviders } from './http-interceptors';
import { routerSerializer } from './router';

import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '@env/environment';
import { reducers, metaReducers } from './core.state';

@NgModule({
  imports: [
    // angular
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,

    // ngrx
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot(),
    // EffectsModule.forRoot([]),
    environment.production
      ? []
      : StoreDevtoolsModule.instrument({ name: 'Angular NgRx Store' })
  ],
  providers: [httpInterceptorProviders, routerSerializer]
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
