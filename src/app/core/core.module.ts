import { NgModule, Optional, SkipSelf, ErrorHandler, APP_INITIALIZER } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { TokenInterceptor } from "./http-interceptors/http-token.interceptor";
import { AppErrorInterceptor } from "./http-interceptors/http-error.interseptor";
import { AppInitService } from "./services/app-init.service";

export function initializerFactory(appConfig: AppInitService) {
  return (): Promise<any> => {
    return appConfig.load();
  };
}

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    {
      provide: ErrorHandler,
      useClass: AppErrorInterceptor,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializerFactory,
      deps: [AppInitService],
      multi: true,
    },
    AppInitService,
  ],
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule,
  ) {
    if (parentModule) {
      throw new Error("CoreModule is already loaded. Import only in AppModule");
    }
  }
}
