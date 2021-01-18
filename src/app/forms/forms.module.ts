import { NgModule } from "@angular/core";

import { FormsRoutingModule } from "./forms-routing.module";
import { SharedModule } from "@shared/shared.module";
import { FormsContainersModule } from "./containers/containers.module";

import { FormsService } from "./services/forms.service";

@NgModule({
  imports: [SharedModule, FormsContainersModule, FormsRoutingModule],
  providers: [FormsService],
  declarations: [],
})
export class FormsModule {}
