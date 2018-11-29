import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';

@NgModule({
  imports: [CommonModule, DashboardRoutingModule],
  declarations: [DashboardContainerComponent]
})
export class DashboardModule {}
