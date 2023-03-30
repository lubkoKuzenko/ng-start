import { Component } from "@angular/core";
import { trigger, transition, style, animate } from "@angular/animations";
import { BaseItemComponent } from "../base-item.component";

@Component({
  selector: "bb-green-device",
  templateUrl: "./green-device.component.html",
  styleUrls: ["./green-device.component.scss"],
  animations: [
    trigger("fadeInOut", [
      transition(":enter", [style({ opacity: 0 }), animate(500, style({ opacity: 1 }))]),
      transition(":leave", [animate(500, style({ opacity: 0 }))]),
    ]),
  ],
})
export class GreenDeviceComponent extends BaseItemComponent<any> {}
