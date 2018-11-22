import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core';
import { SharedModule } from './shared';
import { BBFormlyModule } from './formly/formly.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderModule } from '@coreui/angular';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { DashboardModule } from './dashboard/dashboard.module';
import { QuestionsModule } from './questions/questions.module';
import { DocumentationModule } from './documentation/documentation.module';
import { SettingsModule } from './settings/settings.module';
import { MatIconModule } from '@angular/material/icon';
import { UsersModule } from './users/users.module';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MatIconModule,

    // core & shared
    CoreModule,
    SharedModule,
    PerfectScrollbarModule,

    // features
    AppHeaderModule,
    BBFormlyModule,
    DashboardModule,
    QuestionsModule,
    DocumentationModule,
    SettingsModule,
    UsersModule,
    // app
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
