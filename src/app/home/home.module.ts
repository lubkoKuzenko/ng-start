import { NgModule } from "@angular/core";
import { SharedModule } from "@shared/shared.module";
import { HomeComponentsModule } from "./components/components.module";
import { HomeComponent } from "./home.component";

@NgModule({
  imports: [SharedModule, HomeComponentsModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
})
export class HomeModule {}
