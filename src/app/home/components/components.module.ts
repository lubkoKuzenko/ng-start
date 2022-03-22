import { NgModule, Type } from "@angular/core";
import { SharedModule } from "@shared/shared.module";

import { TreeViewComponent } from "./tree-view/tree-view.component";
import { VirtualScrollComponent } from "./virtual-scroll/virtual-scroll.component";
import { ScrollingModule } from "@angular/cdk/scrolling";

const hComponents: Type<any>[] = [TreeViewComponent, VirtualScrollComponent];

@NgModule({
  imports: [SharedModule, ScrollingModule],
  declarations: [...hComponents],
  exports: [...hComponents],
})
export class HomeComponentsModule {}
