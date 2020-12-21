import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DevicesComponent } from "./containers/devices/devices.component";

const routes: Routes = [{ path: "dc", component: DevicesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DCRoutingModule {}
