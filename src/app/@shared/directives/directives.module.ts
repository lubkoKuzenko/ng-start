import { CommonModule } from "@angular/common";
import { NgModule, Type } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { NumberDirective } from "./numeric.directive";
import { DebounceClickDirective } from "./debounce-click.directive";

export const SHARED_DIRECTIVES: Array<Type<any>> = [NumberDirective, DebounceClickDirective];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [...SHARED_DIRECTIVES],
  exports: [...SHARED_DIRECTIVES],
})
export class SharedDirectivesModule {}
