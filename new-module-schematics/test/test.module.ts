import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "@rbs/shared";
import { TestContainersModule } from "./containers/containers.module";
import { TestComponent } from "./test.component";

@NgModule({
  declarations: [TestComponent],
  imports: [CommonModule, SharedModule, TestContainersModule],
})
export class TestModule {}
