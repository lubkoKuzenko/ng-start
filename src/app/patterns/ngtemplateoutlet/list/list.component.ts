import { Component, Input, TemplateRef } from "@angular/core";

@Component({
  selector: "l9-list",
  templateUrl: "./list.component.html",
})
export class ListComponent {
  @Input() data: string[] = [];

  @Input("template")
  templateRef: TemplateRef<any>;
}
