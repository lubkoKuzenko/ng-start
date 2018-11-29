import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuilderRoutingModule } from './builder-routing.module';
import { BuilderContainerComponent } from './builder-container/builder-container.component';

@NgModule({
  declarations: [BuilderContainerComponent],
  imports: [CommonModule, BuilderRoutingModule]
})
export class BuilderModule {}
