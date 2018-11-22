import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core';
import { SharedModule } from './shared';

import { BBFormlyModule } from './formly/formly.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,

    // core & shared
    CoreModule,
    SharedModule,

    // features
    BBFormlyModule,

    // app
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
