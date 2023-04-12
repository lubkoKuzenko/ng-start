import { NgModule, Type } from "@angular/core";
import { SharedModule } from "@shared/shared.module";

import { BasicFormComponent } from "./basic-form/basic-form.component";
import { NestedFormComponent } from "./nested-form-service/nested-form.component";
import { FormGeneralComponent } from "./nested-form-service/form-general/form-general.component";
import { FormBirthdayComponent } from "./nested-form-service/form-birthday/form-birthday.component";
import { CustomFieldFormComponent } from "./custom-field-form/custom-field-form.component";
import { CounterInputComponent } from "./custom-field-form/counter-input/counter-input.component";
import { DynamicFormComponent } from "./dynamic-form/dynamic-form.component";
import { NestedFormDirectiveComponent } from "./nested-form-directive/nested-form-directive.component";
import { FormFullNameComponent } from "./nested-form-directive/form-fullname/field-fullname.component";
import { AddressFormComponent } from "./reusable-form-group/reusable-form-group.component";

const formsComponents: Array<Type<any>> = [
  BasicFormComponent,
  NestedFormComponent,
  NestedFormDirectiveComponent,
  DynamicFormComponent,
  FormGeneralComponent,
  FormBirthdayComponent,
  FormFullNameComponent,
  CustomFieldFormComponent,
  CounterInputComponent,
  AddressFormComponent,
];

@NgModule({
  imports: [SharedModule],
  declarations: [...formsComponents],
  exports: [...formsComponents],
})
export class FormsComponentsModule {}
