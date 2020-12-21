import { NgModule } from "@angular/core";
import { SharedModule } from "./../shared/shared.module";

import { DCRoutingModule } from "./dc-routing.module";
import { UsersContainersModule } from "./containers/containers.module";

@NgModule({
  imports: [SharedModule, UsersContainersModule, DCRoutingModule],
  declarations: [],
})
export class DCModule {}
