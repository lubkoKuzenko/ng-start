import { Component, OnInit } from "@angular/core";
import { trigger, transition, style, animate } from "@angular/animations";

@Component({
  selector: "bb-blue-device",
  templateUrl: "./blue-device.component.html",
  styleUrls: ["./blue-device.component.scss"],
  animations: [
    trigger("fadeInOut", [
      transition(":enter", [style({ opacity: 0 }), animate(500, style({ opacity: 1 }))]),
      transition(":leave", [animate(500, style({ opacity: 0 }))]),
    ]),
  ],
})
export class BlueDeviceComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
