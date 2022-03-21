import { Component, Input } from "@angular/core";

@Component({
  selector: "l9-client-2",
  templateUrl: "./client-2.component.html",
})
export class ClientTwoComponent {
  @Input() data: string[] = [];
}
