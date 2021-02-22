import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "@shared/shared.module";

import { UsersRoutingModule } from "./users-routing.module";
import { UsersContainersModule } from "./containers/containers.module";

import { UsersService } from "./services/users.service";

@NgModule({
  imports: [CommonModule, SharedModule, UsersContainersModule, UsersRoutingModule],
  declarations: [],
  providers: [UsersService],
})
export class UsersModule {}
