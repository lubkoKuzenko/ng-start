import { NgModule, Type } from "@angular/core";
import { SharedModule } from "@shared/shared.module";
import { CardFormComponent } from "./card-form/card-form.component";
import { CardViewComponent } from "./card-view/card-view.component";

const usersComponents: Array<Type<any>> = [CardViewComponent, CardFormComponent];

@NgModule({
  imports: [SharedModule],
  declarations: [...usersComponents],
  exports: [...usersComponents],
})
export class UsersComponentsModule {}
