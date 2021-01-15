import { NgModule } from "@angular/core";

import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { FormsModule } from "./forms/forms.module";
import { UsersModule } from "./users/users.module";
import { DCModule } from "./dynamic-components/dc.module";
import { RxjsModule } from "./rxjs/rxjs.module";

import { RouteReuseStrategy } from "@angular/router";
import { CustomReuseStrategy } from "./core/services/router-reuse.strategy";

const APP_CORE_CONFIG = {
  defaultLang: "en",
  appName: "NGX-Levi9",
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule.forRoot(APP_CORE_CONFIG),
    SharedModule,

    // features
    FormsModule,
    UsersModule,
    DCModule,
    RxjsModule,

    // app
    AppRoutingModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: CustomReuseStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
