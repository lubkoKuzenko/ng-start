import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuilderContainerComponent } from './builder-container/builder-container.component';

const routes: Routes = [
  { path: 'builder', component: BuilderContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuilderRoutingModule {}
