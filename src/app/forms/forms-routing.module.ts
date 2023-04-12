import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { BasicFormComponent } from "./components/basic-form/basic-form.component";
import { CustomFieldFormComponent } from "./components/custom-field-form/custom-field-form.component";
import { DynamicFormComponent } from "./components/dynamic-form/dynamic-form.component";
import { NestedFormDirectiveComponent } from "./components/nested-form-directive/nested-form-directive.component";
import { NestedFormComponent } from "./components/nested-form-service/nested-form.component";
import { AddressFormComponent } from "./components/reusable-form-group/reusable-form-group.component";
import { FormsComponent } from "./containers/forms/forms.component";

const routes: Routes = [
  {
    path: "",
    component: FormsComponent,
    data: {
      noReuse: true,
    },
    children: [
      { path: "basic", component: BasicFormComponent, data: { firstName: "firstName", lastName: "lastName" } },
      { path: "nested", component: NestedFormComponent },
      { path: "formgroupdirective", component: NestedFormDirectiveComponent },
      { path: "dynamic", component: DynamicFormComponent },
      { path: "controlValueAccessor", component: CustomFieldFormComponent, data: { counter: 2 } },
      { path: "reusableFormGroup", component: AddressFormComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormsRoutingModule {}
