import { NgModule, Type } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "./../../@shared/shared.module";

import { AdapterComponent } from "./adapter.component";

export const ADAPTER_COMPONENTS: Type<any>[] = [AdapterComponent];

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [...ADAPTER_COMPONENTS],
  exports: [...ADAPTER_COMPONENTS],
})
export class AdapterModule {}
