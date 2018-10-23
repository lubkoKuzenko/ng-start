import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule, 
    MaterialModule
  ],
  declarations: [],
  providers: [],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule]
})
export class SharedModule {}
