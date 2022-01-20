import { FormControl } from "@angular/forms";
import { PasswordValidators } from "./password-control.validator";

/*
A minimum of 8 characters
At least one UPPERCASE letter
At least one lowercase letter
At least one number
*/

describe("[rbs-user-identity-security-center-widget-extended]: PasswordValidators", () => {
  const isValueSatisfyFormatValidator = PasswordValidators.isValueSatisfyFormatValidator();
  const control = new FormControl("input");

  it('should return "wrongPasswordFormat: true" if input string length is less than 8 characters', () => {
    control.setValue("12345");
    expect(isValueSatisfyFormatValidator(control)).toEqual({ wrongPasswordFormat: true });
  });

  it('should return "wrongPasswordFormat: true" if input string do not have UPPERCASE letter', () => {
    control.setValue("12345qwe");
    expect(isValueSatisfyFormatValidator(control)).toEqual({ wrongPasswordFormat: true });
  });

  it('should return "wrongPasswordFormat: true" if input string do not have lowercase letter', () => {
    control.setValue("12345WWW");
    expect(isValueSatisfyFormatValidator(control)).toEqual({ wrongPasswordFormat: true });
  });

  it('should return "wrongPasswordFormat: true" if input string do not have lowercase letter', () => {
    control.setValue("qweqweWWW");
    expect(isValueSatisfyFormatValidator(control)).toEqual({ wrongPasswordFormat: true });
  });

  it("should return null if input string is satisfying all rules", () => {
    control.setValue("123qweQW");
    expect(isValueSatisfyFormatValidator(control)).toBeNull();
  });
});
