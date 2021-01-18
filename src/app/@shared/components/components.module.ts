import { CommonModule } from "@angular/common";
import { NgModule, Type } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { LoaderComponent } from "./loader/loader.component";

export const SHARED_COMPONENTS: Type<any>[] = [LoaderComponent];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [...SHARED_COMPONENTS],
  exports: [...SHARED_COMPONENTS],
})
export class SharedComponentsModule {}
