import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './+dashboard/dashboard.component';
import { LevelOneComponent } from './level-one/level-one.component';
import { LevelTwoComponent } from './level-one/level-two/level-two.component';
import { LevelThreeComponent } from './level-one/level-two/level-three/level-three.component';
import { NgxContextModule } from 'ngx-context';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    NgxContextModule
  ],
  declarations: [
    DashboardComponent,
    LevelOneComponent,
    LevelTwoComponent,
    LevelThreeComponent
  ]
})
export class DashboardModule {}
