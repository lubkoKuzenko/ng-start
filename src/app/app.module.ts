import { NgModule } from "@angular/core";

import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { FormsModule } from "./forms/forms.module";
import { UsersModule } from "./users/users.module";
import { BuilderModule } from "./builder/builder.module";
import { HighchartsModule } from "./highcharts/highcharts.module";
import { RouteReuseStrategy } from "@angular/router";
import { CustomReuseStrategy } from "./core/services/router-reuse.strategy";

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    SharedModule,

    // features
    FormsModule,
    UsersModule,
    BuilderModule,
    HighchartsModule,

    // app
    AppRoutingModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: CustomReuseStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
