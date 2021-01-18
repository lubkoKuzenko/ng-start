import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "./modules/material.module";

import { SharedDirectivesModule } from "./directives/directives.module";
import { SharedPipesModule } from "./pipes/pipes.module";
import { SharedComponentsModule } from "./components/components.module";
import { ValidationMessageModule } from "./modules/validation-message/validation-message.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,

    SharedComponentsModule,
    SharedDirectivesModule,
    SharedPipesModule,

    ValidationMessageModule,
  ],
  declarations: [],
  providers: [],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,

    SharedDirectivesModule,
    SharedComponentsModule,
    SharedPipesModule,

    ValidationMessageModule,
  ],
})
export class SharedModule {}
