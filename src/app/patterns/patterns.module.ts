import { SharedModule } from "@shared/shared.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PatternsRoutingModule } from "./patterns-routing.module";
import { PatternsComponent } from "./patterns.component";

import { BridgeModule } from "./bridge/bridge.module";
import { StrategyModule } from "./strategy/strategy.module";

@NgModule({
  imports: [CommonModule, SharedModule, BridgeModule, StrategyModule, PatternsRoutingModule],
  declarations: [PatternsComponent],
})
export class PatternsModule {}
