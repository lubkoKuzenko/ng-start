import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

const pattern = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}";

export class PasswordValidators {
  static isValueSatisfyFormatValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const reg = new RegExp(pattern);
      if (control.value && !reg.test(String(control.value))) {
        return { wrongPasswordFormat: true };
      }

      return null;
    };
  }
}
