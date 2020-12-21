import { NgModule, Type } from "@angular/core";
import { SharedModule } from "../../shared/shared.module";
import { DCComponentsModule } from "../components/components.module";
import { DevicesComponent } from "./devices/devices.component";

const dcContainers: Array<Type<any>> = [DevicesComponent];

@NgModule({
  declarations: [...dcContainers],
  imports: [SharedModule, DCComponentsModule],
  exports: [...dcContainers],
})
export class UsersContainersModule {}
