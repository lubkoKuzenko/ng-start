import { NgModule } from "@angular/core";
import { SharedModule } from "./../shared/shared.module";

import { UsersRoutingModule } from "./users-routing.module";
import { UsersContainersModule } from "./containers/containers.module";

@NgModule({
  imports: [SharedModule, UsersContainersModule, UsersRoutingModule],
  declarations: [],
})
export class UsersModule {}
