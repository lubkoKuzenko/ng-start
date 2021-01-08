import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { RxjsContainersModule } from "./containers/containers.module";
import { RxjsRoutingModule } from "./rxjs-routing.module";

@NgModule({
  imports: [SharedModule, RxjsContainersModule, RxjsRoutingModule],
})
export class RxjsModule {}
