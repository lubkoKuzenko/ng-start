import { Component, Input } from "@angular/core";

@Component({
  selector: "l9-extendable-component",
  templateUrl: "./extendable-component.component.html",
})
export class ExtendableComponentComponent {
  @Input() data: string[] = [];
}
