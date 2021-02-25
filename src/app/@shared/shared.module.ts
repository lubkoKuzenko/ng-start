import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "./modules/material.module";
import { NgxJsonViewerModule } from "ngx-json-viewer";

import { SharedDirectivesModule } from "./directives/directives.module";
import { SharedPipesModule } from "./pipes/pipes.module";
import { SharedComponentsModule } from "./components/components.module";

import { NcBulmaModule } from "./modules/nc-bulma/nc-bulma.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgxJsonViewerModule,

    SharedComponentsModule,
    SharedDirectivesModule,
    SharedPipesModule,

    NcBulmaModule,
  ],
  declarations: [],
  providers: [],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgxJsonViewerModule,

    SharedDirectivesModule,
    SharedComponentsModule,
    SharedPipesModule,

    NcBulmaModule,
  ],
})
export class SharedModule {}
