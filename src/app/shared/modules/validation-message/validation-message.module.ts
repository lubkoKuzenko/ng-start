import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormatErrorMessagePipe } from "./format-error-message.pipe";
import { ValidationMessageComponent } from "./validation-message.component";

const VALIDATION_COMPONENTS = [ValidationMessageComponent];
const VALIDATION_PIPES = [FormatErrorMessagePipe];

@NgModule({
  declarations: [...VALIDATION_COMPONENTS, VALIDATION_PIPES],
  imports: [CommonModule],
  exports: [...VALIDATION_COMPONENTS, VALIDATION_PIPES],
  providers: [],
})
export class ValidationMessageModule {}
