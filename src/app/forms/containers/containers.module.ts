import { NgModule, Type } from "@angular/core";
import { SharedModule } from "@shared/shared.module";
import { FormsComponentsModule } from "../components/components.module";
import { FormsComponent } from "./forms/forms.component";

const formsContainers: Array<Type<any>> = [FormsComponent];

@NgModule({
  declarations: [...formsContainers],
  imports: [SharedModule, FormsComponentsModule],
  exports: [...formsContainers],
})
export class FormsContainersModule {}
