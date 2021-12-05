import { NgModule, Type } from "@angular/core";
import { SharedModule } from "@rbs/shared";
import { TesComponentsModule } from "./components/components.module";

const tesContainers: Array<Type<any>> = [];

@NgModule({
  declarations: [...tesContainers],
  imports: [SharedModule, TesComponentsModule],
  exports: [...tesContainers],
})
export class TesContainersModule {}
