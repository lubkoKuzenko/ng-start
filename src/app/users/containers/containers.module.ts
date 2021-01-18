import { NgModule, Type } from "@angular/core";
import { SharedModule } from "@shared/shared.module";
import { UsersComponentsModule } from "../components/components.module";
import { UsersComponent } from "./users/users.component";

const usersContainers: Array<Type<any>> = [UsersComponent];

@NgModule({
  declarations: [...usersContainers],
  imports: [SharedModule, UsersComponentsModule],
  exports: [...usersContainers],
})
export class UsersContainersModule {}
