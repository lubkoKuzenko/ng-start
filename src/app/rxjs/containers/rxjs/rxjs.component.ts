import { Component, OnInit } from "@angular/core";
import { timer } from "rxjs";

@Component({
  selector: "bb-rxjs",
  templateUrl: "./rxjs.component.html",
  styleUrls: ["./rxjs.component.scss"],
})
export class RxjsComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const timer$ = timer(300, 1000);

    timer$.subscribe((v) => console.log(v));
  }
}
