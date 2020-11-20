import { CommonModule } from "@angular/common";
import { NgModule, Type } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { UnderlineDirective } from "./underline.directive";

export const SHARED_DIRECTIVES: Array<Type<any>> = [UnderlineDirective];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [...SHARED_DIRECTIVES],
  exports: [...SHARED_DIRECTIVES],
})
export class SharedDirectivesModule {}
