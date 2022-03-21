import { NgModule, Type } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgtemplateoutletComponent } from "./ngtemplateoutlet.component";
import { ClientThreeComponent } from "./client-3/client-3.component";
import { ClientOneComponent } from "./client-1/client-1.component";
import { ClientTwoComponent } from "./client-2/client-2.component";
import { ListComponent } from "./list/list.component";

export const COMPONENTS: Type<any>[] = [
  NgtemplateoutletComponent,
  ListComponent,
  ClientOneComponent,
  ClientTwoComponent,
  ClientThreeComponent,
];

@NgModule({
  imports: [CommonModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class NgtemplateoutletModule {}
