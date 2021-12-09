import { NgModule, Type } from "@angular/core";
import { SharedModule } from "@shared/shared.module";
import { UsersComponentsModule } from "../components/components.module";
import { CardsComponent } from "./cards/cards.component";

const cardsContainers: Array<Type<any>> = [CardsComponent];

@NgModule({
  declarations: [...cardsContainers],
  imports: [SharedModule, UsersComponentsModule],
  exports: [...cardsContainers],
})
export class CardsContainersModule {}
