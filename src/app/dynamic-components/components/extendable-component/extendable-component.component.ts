import { Component, Input } from "@angular/core";

@Component({
  selector: "l9-extendable-component",
  templateUrl: "./extendable-component.component.html",
  styleUrls: ["./extendable-component.component.scss"],
})
export class ExtendableComponentComponent {
  @Input() data: string[] = [];
}
