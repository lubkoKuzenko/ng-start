import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { APP_INITIALIZER, ErrorHandler, ModuleWithProviders, NgModule, Optional, SkipSelf } from "@angular/core";
import { RouteReuseStrategy } from "@angular/router";
import { GlobalErrorHandler } from "@core/services/global-error-handler";
import { throwIfAlreadyLoaded } from "./guards/module-import-guard";
import { ApiPrefixInterceptor } from "./interceptor/api-prefix.interceptor";
import { HttpErrorInterceptor } from "./interceptor/http-error.interceptor";
import { TokenInterceptor } from "./interceptor/jwt-interceptor";
import { RouteReusableStrategy } from "./route-reusable-strategy";
import { AppInitService } from "./services/app-init.service";
import { APP_LANG, APP_NAME } from "./tokens";
import { environment } from "@env/environment";

import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

export function initializerFactory(appConfig: AppInitService) {
  return (): Promise<any> => appConfig.load();
}

export function httpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, `${environment.i18nPrefix}/assets/i18n/`, ".json");
}

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    // 3rd party
    TranslateModule.forRoot({
      defaultLanguage: environment.defaultLanguage || "en",
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [HttpClientModule, TranslateModule],
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
          useValue: options.defaultLanguage || environment.defaultLanguage || "en",
        },
        {
          provide: APP_NAME,
          useValue: options.appName || environment.appName || "NG-Start",
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
