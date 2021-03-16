import { NgModule, Type } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "./../../@shared/shared.module";

import { WidgetWrapperComponent } from "./widget-wrapper/widget-wrapper.component";
import { WidgetOneComponent } from "./widget-one/widget-one.component";
import { WidgetTwoComponent } from "./widget-two/widget-two.component";

export const BRIDGE_COMPONENTS: Type<any>[] = [WidgetWrapperComponent, WidgetOneComponent, WidgetTwoComponent];

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [...BRIDGE_COMPONENTS],
  exports: [...BRIDGE_COMPONENTS],
})
export class BridgeModule {}
