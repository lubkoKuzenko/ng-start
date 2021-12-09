import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "@shared/shared.module";

import { CardsRoutingModule } from "./cards-routing.module";
import { CardsContainersModule } from "./containers/containers.module";

import { CardsService } from "./services/cards.service";
import { CardsFacadeService } from "./services/cards-facade.service";

@NgModule({
  imports: [CommonModule, SharedModule, CardsContainersModule, CardsRoutingModule],
  declarations: [],
  providers: [CardsFacadeService, CardsService],
})
export class CardsModule {}
