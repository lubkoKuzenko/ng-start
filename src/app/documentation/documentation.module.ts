import { NgModule } from '@angular/core';

import { DocumentationRoutingModule } from './documentation-routing.module';
import { DocumentationComponent } from './documentation.component';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' }
      ]
    }),
    FormlyMaterialModule,
    DocumentationRoutingModule
  ],
  declarations: [DocumentationComponent]
})
export class DocumentationModule {}
