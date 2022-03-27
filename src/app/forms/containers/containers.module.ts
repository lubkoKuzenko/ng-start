import { NgModule, Type } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "@shared/shared.module";
import { FormsComponentsModule } from "../components/components.module";
import { FormsComponent } from "./forms/forms.component";

const formsContainers: Array<Type<any>> = [FormsComponent];

@NgModule({
  declarations: [...formsContainers],
  imports: [SharedModule, RouterModule, FormsComponentsModule],
  exports: [...formsContainers],
})
export class FormsContainersModule {}
