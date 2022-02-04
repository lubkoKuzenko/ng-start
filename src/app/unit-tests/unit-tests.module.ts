import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "@shared/shared.module";

import { UnitTestsRoutingModule } from "./unit-tests-routing.module";
import { UnitTestsComponent } from "./unit-tests.component";
import { DebounceClickDirective } from "./directives/debounce-click.directive";
import { PresentationalComponentsModule } from "./presentational-components/components.module";
import { TestPipesModule } from "./pipes/pipes.module";

@NgModule({
  imports: [CommonModule, SharedModule, UnitTestsRoutingModule, PresentationalComponentsModule, TestPipesModule],
  declarations: [UnitTestsComponent, DebounceClickDirective],
  providers: [],
})
export class UnitTestModule {}
