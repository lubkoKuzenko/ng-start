import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentationRoutingModule } from './documentation-routing.module';
import { DocumentationComponent } from './documentation.component';
import { BBFormlyModule } from './../formly';

@NgModule({
  imports: [CommonModule, BBFormlyModule, DocumentationRoutingModule],
  declarations: [DocumentationComponent]
})
export class DocumentationModule {}
