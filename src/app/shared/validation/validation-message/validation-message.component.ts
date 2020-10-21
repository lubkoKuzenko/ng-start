import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationService } from '../validation.service';

@Component({
  selector: 'app-validation-message',
  styleUrls: ['validation-message.component.scss'],
  templateUrl: 'validation-message.component.html'
})
export class ValidationMessagesComponent {
  @Input()
  public control!: FormControl;
  constructor(public validationService: ValidationService) {}

  get errorMessage() {
    if (this.control && this.control.errors) {
      for (const propertyName in this.control.errors) {
        if (
          this.control.errors.hasOwnProperty(propertyName) &&
          (this.control.dirty || this.control.touched)
        ) {
          return ValidationService.getValidatorErrorMessage(
            propertyName,
            this.control.errors[propertyName]
          );
        }
      }
    }

    return null;
  }
}
