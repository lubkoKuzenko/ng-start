import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const testRoutes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(testRoutes)],
  exports: [RouterModule],
})
export class TestRoutingModule {}
