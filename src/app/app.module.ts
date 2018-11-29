import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core';
import { SharedModule } from './shared';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardModule } from './dashboard/dashboard.module';
import { UsersModule } from './users/users.module';
import { BuilderModule } from './builder/builder.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,

    // core & shared
    CoreModule,
    SharedModule,

    // features
    DashboardModule,
    UsersModule,
    BuilderModule,

    // app
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
