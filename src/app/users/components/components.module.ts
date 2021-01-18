import { NgModule, Type } from "@angular/core";
import { SharedModule } from "@shared/shared.module";

const usersComponents: Array<Type<any>> = [];

@NgModule({
  imports: [SharedModule],
  declarations: [...usersComponents],
  exports: [...usersComponents],
})
export class UsersComponentsModule {}
