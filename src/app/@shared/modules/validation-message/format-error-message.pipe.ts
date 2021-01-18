import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "formatErrorMessage",
})
export class FormatErrorMessagePipe implements PipeTransform {
  constructor() {}
  public transform(validationError: { key: string; value: any }): any {
    return this.getFormattedErrorMessage(validationError.key, validationError.value);
  }

  private getFormattedErrorMessage(validatorName: string, validatorValue?: any) {
    const config: any = {
      required: "This field cannot be left blank",
      minlength: `Minimum length ${validatorValue.requiredLength}`,
      maxlength: `Maximum length ${validatorValue.requiredLength}`,
      min: `Minimum value is ${validatorValue.min}`,
      max: `Maximum value should be less then ${validatorValue.max}`,
      pattern: "Control has leading whitespace",
      rangeDate: "Date range is not valid",
    };

    return config[validatorName];
  }
}
