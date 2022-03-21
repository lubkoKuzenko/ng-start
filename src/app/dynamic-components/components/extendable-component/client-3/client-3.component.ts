import { Component, Input } from "@angular/core";

@Component({
  selector: "l9-client-3",
  templateUrl: "./client-3.component.html",
})
export class ClientThreeComponent {
  @Input() data: string[] = [];
}
