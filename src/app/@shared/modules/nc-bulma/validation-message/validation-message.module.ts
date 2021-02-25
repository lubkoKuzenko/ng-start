import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormatErrorMessagePipe } from "./format-error-message.pipe";
import { ValidationMessageComponent } from "./validation-message.component";
import { CheckFormFieldValidity } from "./check-form-field-validity.directive";

const VALIDATION_COMPONENTS = [ValidationMessageComponent];
const VALIDATION_PIPES = [FormatErrorMessagePipe];
const VALIDATION_DIRECTIVES = [CheckFormFieldValidity];

@NgModule({
  declarations: [...VALIDATION_COMPONENTS, VALIDATION_PIPES, VALIDATION_DIRECTIVES],
  imports: [CommonModule],
  exports: [...VALIDATION_COMPONENTS, VALIDATION_PIPES, VALIDATION_DIRECTIVES],
  providers: [],
})
export class ValidationMessageModule {}
