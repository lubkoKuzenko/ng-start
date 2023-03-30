import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "./modules/material.module";
import { NgxJsonViewerModule } from "ngx-json-viewer";

import { SharedDirectivesModule } from "./directives/directives.module";
import { SharedPipesModule } from "./pipes/pipes.module";
import { SharedComponentsModule } from "./components/components.module";
import { ValidationMessageModule } from "./modules/validation-message";
import { TranslateModule } from "@ngx-translate/core";
import { AlphabeticalListModule } from "./modules/alphabetical-list";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    MaterialModule,
    NgxJsonViewerModule,

    SharedComponentsModule,
    SharedDirectivesModule,
    SharedPipesModule,

    ValidationMessageModule,
    AlphabeticalListModule,
  ],
  declarations: [],
  providers: [],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    MaterialModule,
    NgxJsonViewerModule,

    SharedDirectivesModule,
    SharedComponentsModule,
    SharedPipesModule,

    ValidationMessageModule,
    AlphabeticalListModule,
  ],
})
export class SharedModule {}
