import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersContainerComponent } from './users-container/users-container.component';

@NgModule({
  imports: [CommonModule, UsersRoutingModule],
  declarations: [UsersContainerComponent]
})
export class UsersModule {}
