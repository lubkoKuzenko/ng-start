import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CoreModule } from "@core/core.module";
import { SharedModule } from "@shared/shared.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeModule } from "./home/home.module";
import { NavigationModule } from "./navigation/navigation.module";

// import mockServer from "./_be-mocks";

// mockServer();

const APP_CORE_CONFIG = {
  defaultLanguage: "en-US",
  appName: "NG-Start",
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    CoreModule.forRoot(APP_CORE_CONFIG),
    SharedModule,

    // app
    NavigationModule,
    HomeModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
