import { NgModule } from "@angular/core";

import { CoreModule } from "@core/core.module";
import { SharedModule } from "@shared/shared.module";

import { AppRoutingModule } from "./app-routing.module";
import { ShellModule } from "./shell/shell.module";
import { AppComponent } from "./app.component";

import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

const APP_CORE_CONFIG = {
  defaultLanguage: "en-US",
  appName: "NGX-Levi9",
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    CoreModule.forRoot(APP_CORE_CONFIG),
    SharedModule,

    ShellModule,

    // app
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
