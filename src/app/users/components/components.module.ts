import { NgModule, Type } from "@angular/core";
import { SharedModule } from "@shared/shared.module";

import { UsersViewComponent } from "./users-view/users-view.component";

const usersComponents: Array<Type<any>> = [UsersViewComponent];

@NgModule({
  imports: [SharedModule],
  declarations: [...usersComponents],
  exports: [...usersComponents],
})
export class UsersComponentsModule {}
