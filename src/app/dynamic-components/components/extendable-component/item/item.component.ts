import { Component, Input, TemplateRef } from "@angular/core";

@Component({
  selector: "l9-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.scss"],
})
export class ItemComponent {
  @Input() data: string[] = [];
  @Input() template: TemplateRef<HTMLElement>;
}
