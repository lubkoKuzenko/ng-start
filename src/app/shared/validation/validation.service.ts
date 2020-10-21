import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ValidationService {
  public static getValidatorErrorMessage(
    validatorName: string,
    validatorValue?: any
  ) {
    const config = {
      required: 'This field cannot be left blank',
      minlength: `Minimum length ${validatorValue.requiredLength}`,
      maxlength: `Maximum length ${validatorValue.requiredLength}`,
      min: `Minimum value is ${validatorValue.min}`,
      max: `Maximum value should be less then ${validatorValue.max}`,
      pattern: 'Control has leading whitespace'
    };

    return config[validatorName];
  }
}
