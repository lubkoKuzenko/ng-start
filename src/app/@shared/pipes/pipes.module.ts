import { CommonModule } from "@angular/common";
import { NgModule, Type } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { ReverseStrPipe } from "./reverse.pipe";
import { RemoveWhiteSpacePipe } from "@shared/pipes/remove-white-space.pipe";

export const SHARED_PIPES: Array<Type<any>> = [ReverseStrPipe, RemoveWhiteSpacePipe];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [...SHARED_PIPES],
  exports: [...SHARED_PIPES],
})
export class SharedPipesModule {}
