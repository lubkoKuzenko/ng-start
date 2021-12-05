import { NgModule, Type } from "@angular/core";
import { SharedModule } from "@rbs/shared";
import { TestComponentsModule } from "./components/components.module";

const testContainers: Array<Type<any>> = [];

@NgModule({
  declarations: [...testContainers],
  imports: [SharedModule, TestComponentsModule],
  exports: [...testContainers],
})
export class TestContainersModule {}
