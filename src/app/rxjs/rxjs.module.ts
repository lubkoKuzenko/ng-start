import { NgModule } from "@angular/core";
import { SharedModule } from "@shared/shared.module";
import { RxjsContainersModule } from "./containers/containers.module";
import { RxjsRoutingModule } from "./rxjs-routing.module";
import { TodosService } from "./services/todos.service";

@NgModule({
  imports: [SharedModule, RxjsContainersModule, RxjsRoutingModule],
  providers: [TodosService],
})
export class RxjsModule {}
