import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionsComponent } from './questions.component';

@NgModule({
  imports: [CommonModule, QuestionsRoutingModule],
  declarations: [QuestionsComponent]
})
export class QuestionsModule {}
