import { NgModule } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { Validation } from './validation.helper';
import { SharedModule } from './../shared/shared.module';
import { FormlyContainer } from './formly-container/formly-container.component';

@NgModule({
  imports: [
    SharedModule,
    FormlyModule.forRoot({
      validators: [
        { name: 'first_name', validation: Validation.firstNameValidator }
      ],
      validationMessages: [
        { name: 'required', message: 'This field is required' },
        { name: 'first_name', message: Validation.firstNameValidatorMessage }
      ]
    }),
    FormlyMaterialModule
  ],
  declarations: [FormlyContainer],
  exports: [FormlyContainer]
})
export class BBFormlyModule {}
