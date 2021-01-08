import { NgModule, Type } from "@angular/core";
import { SharedModule } from "../../shared/shared.module";

const rxjsComponents: Array<Type<any>> = [];

@NgModule({
  imports: [SharedModule],
  declarations: [...rxjsComponents],
  exports: [...rxjsComponents],
})
export class RxjsComponentsModule {}
