import { NgModule } from '@angular/core';

import { BuilderRoutingModule } from './builder-routing.module';
import { BuilderContainerComponent } from './builder-container/builder-container.component';
import { SharedModule } from '../shared';

@NgModule({
  declarations: [BuilderContainerComponent],
  imports: [SharedModule, BuilderRoutingModule]
})
export class BuilderModule {}
