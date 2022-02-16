import { NgModule, Type } from "@angular/core";
import { SharedModule } from "@shared/shared.module";

import { RedDeviceComponent } from "./red-device/red-device.component";
import { BlueDeviceComponent } from "./blue-device/blue-device.component";
import { GreenDeviceComponent } from "./green-device/green-device.component";
import { TreeViewComponent } from "./tree-view/tree-view.component";
import { ExtendableComponentComponent } from "./extendable-component/extendable-component.component";
import { ItemComponent } from "./extendable-component/item/item.component";

const dcComponents: Type<any>[] = [
  RedDeviceComponent,
  GreenDeviceComponent,
  BlueDeviceComponent,
  TreeViewComponent,
  ExtendableComponentComponent,
  ItemComponent,
];

@NgModule({
  imports: [SharedModule],
  declarations: [...dcComponents],
  exports: [...dcComponents],
})
export class DCComponentsModule {}
