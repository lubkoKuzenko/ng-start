// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { ValidationMessagesComponent } from './validation-message/validation-message.component';
import { ValidationService } from './validation.service';

@NgModule({
  declarations: [ValidationMessagesComponent],
  imports: [CommonModule],
  providers: [ValidationService],
  exports: [ValidationMessagesComponent]
})
export class ValidationModule {}
