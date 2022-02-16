import { Component, Input } from "@angular/core";

@Component({
  selector: "l9-virtual-scroll",
  templateUrl: "./virtual-scroll.component.html",
  styleUrls: ["./virtual-scroll.component.scss"],
})
export class VirtualScrollComponent {
  @Input() data: string[] = [];
}
