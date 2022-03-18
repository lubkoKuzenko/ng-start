import { NgModule, Type } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "./../../@shared/shared.module";

import { StrategyComponent } from "./strategy.component";

export const STRATEGY_COMPONENTS: Type<any>[] = [StrategyComponent];

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [...STRATEGY_COMPONENTS],
  exports: [...STRATEGY_COMPONENTS],
})
export class StrategyModule {}
