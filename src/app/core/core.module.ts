import { NgModule, Optional, SkipSelf, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoaderComponent } from './components/loader';

import { Interceptor } from './http.interceptor.service';
import { AppErrorHandler } from './error-handler.service';
import { CustomSerializer } from './custom-router-state-serializer';

import { StoreModule } from '@ngrx/store';
import {
  StoreRouterConnectingModule,
  RouterStateSerializer
} from '@ngrx/router-store';
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
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    },
    {
      provide: ErrorHandler,
      useClass: AppErrorHandler
    },
    {
      provide: RouterStateSerializer,
      useClass: CustomSerializer
    }
  ],
  declarations: [LoaderComponent],
  exports: [LoaderComponent]
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
