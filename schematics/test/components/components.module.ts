import { NgModule, Type } from "@angular/core";
import { SharedModule } from "@shared/shared.module";

const testComponents: Array<Type<any>> = [];

@NgModule({
  imports: [SharedModule],
  declarations: [...testComponents],
  exports: [...testComponents],
})
export class TestComponentsModule {}
