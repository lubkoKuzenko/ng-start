import { NgModule, Type } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DataAgnosticComponent } from "./data-agnostic.component";
import { SharedModule } from "@shared/shared.module";

export const COMPONENTS: Type<any>[] = [DataAgnosticComponent];

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class DataAgnosticModule {}
