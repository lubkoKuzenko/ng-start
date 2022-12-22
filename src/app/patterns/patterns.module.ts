import { SharedModule } from "@shared/shared.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PatternsRoutingModule } from "./patterns-routing.module";
import { PatternsComponent } from "./patterns.component";

import { BridgeModule } from "./bridge/bridge.module";
import { StrategyModule } from "./strategy/strategy.module";
import { AdapterModule } from "./adapter/adapter.module";
import { NgtemplateoutletModule } from "./ngtemplateoutlet/ngtemplateoutlet.module";
import { BuilderModule } from "./builder/builder.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    BridgeModule,
    StrategyModule,
    AdapterModule,
    BuilderModule,
    NgtemplateoutletModule,
    PatternsRoutingModule,
  ],
  declarations: [PatternsComponent],
})
export class PatternsModule {}
