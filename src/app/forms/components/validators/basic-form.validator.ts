import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class BasicFormValidators {
  static fullNameValidator(): ValidatorFn {
    return (group: AbstractControl): ValidationErrors | null => {
      const fn = group.get("firstName").value;
      const ln = group.get("lastName").value;

      return fn && ln ? null : { invalidFullName: true };
    };
  }
}
