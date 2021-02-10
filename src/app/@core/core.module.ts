import { NgModule, Optional, SkipSelf, APP_INITIALIZER, ModuleWithProviders, ErrorHandler } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { RouteReuseStrategy } from "@angular/router";

import { HttpErrorInterceptor } from "./interceptor/http-error.interceptor";
import { TokenInterceptor } from "./interceptor/jwt-interceptor";
import { AppInitService } from "./services/app-init.service";
import { throwIfAlreadyLoaded } from "./guards/module-import-guard";
import { RouteReusableStrategy } from "./route-reusable-strategy";
import { ApiPrefixInterceptor } from "./interceptor/api-prefix.interceptor";
import { environment } from "src/environments/environment";
import { APP_LANG, APP_NAME } from "./tokens";
import { GlobalErrorHandler } from "@core/services/global-error-handler";

export function initializerFactory(appConfig: AppInitService) {
  return (): Promise<any> => appConfig.load();
}

@NgModule({
  imports: [CommonModule, HttpClientModule],
  exports: [HttpClientModule],
  providers: [],
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule,
  ) {
    throwIfAlreadyLoaded(parentModule, "CoreModule");
  }
  static forRoot(options: { defaultLanguage?: string; appName?: string }): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        {
          provide: APP_LANG,
          useValue: options.defaultLanguage || environment.defaultLanguage || "en-US",
        },
        {
          provide: APP_NAME,
          useValue: options.appName || environment.appName || "NGX-Levi9",
        },
        {
          provide: ErrorHandler,
          useClass: GlobalErrorHandler,
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ApiPrefixInterceptor,
          multi: true,
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: TokenInterceptor,
          multi: true,
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpErrorInterceptor,
          multi: true,
        },
        {
          provide: RouteReuseStrategy,
          useClass: RouteReusableStrategy,
        },
        {
          provide: APP_INITIALIZER,
          useFactory: initializerFactory,
          deps: [AppInitService],
          multi: true,
        },
        AppInitService,
      ],
    };
  }
}
