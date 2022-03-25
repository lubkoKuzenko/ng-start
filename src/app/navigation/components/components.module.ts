import { NgModule, Type } from "@angular/core";
import { SharedModule } from "@shared/shared.module";

import { BranchIconComponent } from "./branch-icon.component";
import { HomeIconComponent } from "./home-icon.component";
import { SidebarToggleIconComponent } from "./sidebar-toggle.component";

const navComponents: Type<any>[] = [HomeIconComponent, BranchIconComponent, SidebarToggleIconComponent];

@NgModule({
  imports: [SharedModule],
  declarations: [...navComponents],
  exports: [...navComponents],
})
export class NavigationComponentsModule {}
