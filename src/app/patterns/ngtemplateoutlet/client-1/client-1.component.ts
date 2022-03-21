import { Component, Input } from "@angular/core";

@Component({
  selector: "l9-client-1",
  templateUrl: "./client-1.component.html",
})
export class ClientOneComponent {
  @Input() data: string[] = [];
}
