import { CommonModule } from "@angular/common";
import { NgModule, Type } from "@angular/core";

import { TestComponent } from "./test/test.component";

export const COMPONENTS: Type<any>[] = [TestComponent];

@NgModule({
  imports: [CommonModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class PresentationalComponentsModule {}
