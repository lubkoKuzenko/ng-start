import { NgModule, Optional, SkipSelf, ErrorHandler, APP_INITIALIZER, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { TokenInterceptor } from "./interceptor/jwt-interceptor";
import { AppErrorInterceptor } from "./interceptor/error-interceptor";
import { AppInitService } from "./services/app-init.service";
import { throwIfAlreadyLoaded } from "./guards/module-import-guard";
import { environment } from "src/environments/environment";
import { APP_LANG, APP_NAME } from "./tokens";
import { RouteReuseStrategy } from "@angular/router";
import { RouteReusableStrategy } from "./route-reusable-strategy";

export function initializerFactory(appConfig: AppInitService) {
  return (): Promise<any> => {
    return appConfig.load();
  };
}

@NgModule({
  imports: [CommonModule, HttpClientModule],
  exports: [HttpClientModule],
  providers: [],
})
export class CoreModule {
  static forRoot(options: { defaultLang?: string; appName?: string }): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        {
          provide: APP_LANG,
          useValue: options.defaultLang || (environment as any).defaultLang || "en",
        },
        {
          provide: APP_NAME,
          useValue: options.appName || (environment as any).appName || "NGX-Levi9",
        },
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
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule,
  ) {
    throwIfAlreadyLoaded(parentModule, "CoreModule");
  }
}
