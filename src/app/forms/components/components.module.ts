import { NgModule, Type } from "@angular/core";
import { SharedModule } from "../../shared/shared.module";

import { BasicFormComponent } from "./basic-form/basic-form.component";
import { NestedFormComponent } from "./nested-form/nested-form.component";
import { FormGeneralComponent } from "./nested-form/form-general/form-general.component";
import { FormBirthdayComponent } from "./nested-form/form-birthday/form-birthday.component";

const formsComponents: Array<Type<any>> = [
  BasicFormComponent,
  NestedFormComponent,
  FormGeneralComponent,
  FormBirthdayComponent,
];

@NgModule({
  imports: [SharedModule],
  declarations: [...formsComponents],
  exports: [...formsComponents],
})
export class FormsComponentsModule {}
