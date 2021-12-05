import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "@rbs/shared";
import { TesContainersModule } from "./containers/containers.module";
import { TesComponent } from "./tes.component";

@NgModule({
  declarations: [TesComponent],
  imports: [CommonModule, SharedModule, TesContainersModule],
})
export class TesModule {}
