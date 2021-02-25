import { NgModule } from "@angular/core";

import { ValidationMessageModule } from "./validation-message/validation-message.module";

const NC_BULMA_MODULES = [ValidationMessageModule];

@NgModule({
  imports: [...NC_BULMA_MODULES],
  exports: [...NC_BULMA_MODULES],
})
export class NcBulmaModule {}
