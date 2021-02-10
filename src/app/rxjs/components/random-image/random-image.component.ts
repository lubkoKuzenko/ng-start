import { Component, Input } from "@angular/core";

@Component({
  selector: "bb-random-image",
  templateUrl: "./random-image.component.html",
  styleUrls: ["./random-image.component.scss"],
})
export class RandomImageComponent {
  @Input() public image!: any;
}
