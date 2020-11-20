import { NgModule } from "@angular/core";

import { BuilderRoutingModule } from "./builder-routing.module";
import { BuilderContainerComponent } from "./builder-container/builder-container.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [BuilderContainerComponent],
  imports: [SharedModule, BuilderRoutingModule],
})
export class BuilderModule {}
