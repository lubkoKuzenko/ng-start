import { NgModule } from '@angular/core';

import { HighchartsRoutingModule } from './highcharts-routing.module';
import { HighchartsComponent } from './+highcharts/highcharts.component';
import { SharedModule } from '../shared';

@NgModule({
  imports: [SharedModule, HighchartsRoutingModule],
  declarations: [HighchartsComponent]
})
export class HighchartsModule {}
