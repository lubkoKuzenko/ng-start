import { FormControl, ValidationErrors } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

export class Validation {
  static firstNameValidator(control: FormControl): ValidationErrors {
    return control.value && control.value.length < 3
      ? { first_name: true }
      : null;
  }

  static firstNameValidatorMessage(err, field: FormlyFieldConfig) {
    return `"${field.formControl.value}" length is less that required`;
  }
}
