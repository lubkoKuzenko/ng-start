import { FormControl } from "@angular/forms";
import { PasswordValidators } from "./password-control.validator";

/*
A minimum of 7 characters
At least one UPPERCASE letter
At least one lowercase letter
At least one number
*/

const TEST_CASES = [
  { test_case: "string length is less than 7 characters", value: "12345", result: { wrongPasswordFormat: true } },
  { test_case: "string do not have UPPERCASE letter", value: "12345qwe", result: { wrongPasswordFormat: true } },
  { test_case: "string do not have lowercase letter", value: "12345WWW", result: { wrongPasswordFormat: true } },
  { test_case: "string do not have one number", value: "qweqweWWW", result: { wrongPasswordFormat: true } },
  { test_case: "string has correct value", value: "123qweQW", result: null },
];

describe("PasswordValidators", () => {
  const isPasswordInCorrectFormatValidator = PasswordValidators.isValueSatisfyFormatValidator();
  const control = new FormControl("input");

  TEST_CASES.forEach(({ test_case, value, result }) => {
    it(`should return ${result} if input ${test_case}`, () => {
      control.setValue(value);
      expect(isPasswordInCorrectFormatValidator(control)).toEqual(result);
    });
  });
});
