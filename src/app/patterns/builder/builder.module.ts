import { NgModule, Type } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BuilderComponent } from "./builder.component";

export const COMPONENTS: Type<any>[] = [BuilderComponent];

@NgModule({
  imports: [CommonModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class BuilderModule {}
