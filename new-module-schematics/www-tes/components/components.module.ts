import { NgModule, Type } from "@angular/core";
import { SharedModule } from "@shared/shared.module";

const tesComponents: Array<Type<any>> = [];

@NgModule({
  imports: [SharedModule],
  declarations: [...tesComponents],
  exports: [...tesComponents],
})
export class TesComponentsModule {}
