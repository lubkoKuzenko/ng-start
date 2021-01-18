import { NgModule, Type } from "@angular/core";
import { SharedModule } from "@shared/shared.module";
import { RxjsComponentsModule } from "../components/components.module";
import { RxjsComponent } from "./rxjs/rxjs.component";

const rxjsContainers: Array<Type<any>> = [RxjsComponent];

@NgModule({
  declarations: [...rxjsContainers],
  imports: [SharedModule, RxjsComponentsModule],
  exports: [...rxjsContainers],
})
export class RxjsContainersModule {}
