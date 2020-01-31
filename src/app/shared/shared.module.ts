import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material';

import * as fromDirectives from './directives';
import * as fromPipes from './pipes';
import * as fromComponents from './components';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  declarations: [
    ...fromDirectives.directives,
    ...fromPipes.pipes,
    ...fromComponents.components
  ],
  providers: [],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ...fromDirectives.directives,
    ...fromPipes.pipes,
    ...fromComponents.components
  ]
})
export class SharedModule {}
