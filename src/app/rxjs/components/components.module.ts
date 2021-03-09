import { NgModule, Type } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "@shared/shared.module";

import { RandomImageComponent } from "./random-image/random-image.component";
import { ChartLineComponent } from "./chart-line/chart-line.component";

const rxjsComponents: Array<Type<any>> = [RandomImageComponent, ChartLineComponent];

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [...rxjsComponents],
  exports: [...rxjsComponents],
})
export class RxjsComponentsModule {}
