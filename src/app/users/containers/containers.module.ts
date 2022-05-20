import { NgModule, Type } from "@angular/core";
import { SharedModule } from "@shared/shared.module";
import { UsersComponentsModule } from "../components/components.module";
import { UsersComponent } from "./users/users.component";
import { NgForTrackByPropertyModule } from "ng-for-track-by-property";

const usersContainers: Array<Type<any>> = [UsersComponent];

@NgModule({
  declarations: [...usersContainers],
  imports: [SharedModule, UsersComponentsModule, NgForTrackByPropertyModule],
  exports: [...usersContainers],
})
export class UsersContainersModule {}
