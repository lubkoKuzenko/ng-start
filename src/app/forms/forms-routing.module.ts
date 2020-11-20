import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { FormsComponent } from "./containers/forms/forms.component";

const routes: Routes = [
  {
    path: "forms",
    component: FormsComponent,
    data: {
      noReuse: true,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormsRoutingModule {}
