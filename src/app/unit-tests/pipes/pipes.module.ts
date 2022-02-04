import { CommonModule } from "@angular/common";
import { NgModule, Type } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { ToNumberPipe } from "./string-to-number.pipe";
import { OrderByPipe } from "./order-by.pipe";

export const SHARED_PIPES: Array<Type<any>> = [OrderByPipe, ToNumberPipe];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [...SHARED_PIPES],
  exports: [...SHARED_PIPES],
})
export class TestPipesModule {}
