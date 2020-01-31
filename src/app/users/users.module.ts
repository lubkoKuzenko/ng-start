import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';

import { UsersRoutingModule } from './users-routing.module';
import { UsersContainerComponent } from './users-container/users-container.component';

@NgModule({
  imports: [SharedModule, UsersRoutingModule],
  declarations: [UsersContainerComponent]
})
export class UsersModule {}
