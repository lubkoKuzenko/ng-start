import { NgModule, Type } from "@angular/core";
import { SharedModule } from "@shared/shared.module";

import { RedDeviceComponent } from "./red-device/red-device.component";
import { BlueDeviceComponent } from "./blue-device/blue-device.component";
import { GreenDeviceComponent } from "./green-device/green-device.component";
import { TreeViewComponent } from "./tree-view/tree-view.component";
import { ExtendableComponentComponent } from "./extendable-component/extendable-component.component";
import { VirtualScrollComponent } from "./virtual-scroll/virtual-scroll.component";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { ClientOneComponent } from "./extendable-component/client-1/client-1.component";
import { ClientTwoComponent } from "./extendable-component/client-2/client-2.component";
import { ListComponent } from "./extendable-component/list/list.component";
import { ClientThreeComponent } from "./extendable-component/client-3/client-3.component";

const dcComponents: Type<any>[] = [
  RedDeviceComponent,
  GreenDeviceComponent,
  BlueDeviceComponent,
  TreeViewComponent,
  ExtendableComponentComponent,
  ListComponent,
  ClientOneComponent,
  ClientTwoComponent,
  ClientThreeComponent,
  VirtualScrollComponent,
];

@NgModule({
  imports: [SharedModule, ScrollingModule],
  declarations: [...dcComponents],
  exports: [...dcComponents],
})
export class DCComponentsModule {}
