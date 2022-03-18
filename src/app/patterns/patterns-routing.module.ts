import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PatternsComponent } from "./patterns.component";
import { BridgeComponent } from "./bridge/bridge.component";
import { StrategyComponent } from "./strategy/strategy.component";
import { AdapterComponent } from "./adapter/adapter.component";

const routes: Routes = [
  {
    path: "",
    component: PatternsComponent,
    children: [
      { path: "bridge", component: BridgeComponent },
      { path: "strategy", component: StrategyComponent },
      { path: "adapter", component: AdapterComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatternsRoutingModule {}
