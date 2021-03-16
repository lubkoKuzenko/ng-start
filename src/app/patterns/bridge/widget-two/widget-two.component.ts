import { Component, OnInit } from "@angular/core";
import { iWidget } from "../interfaces/widget-interface";
import { WIDGET_TOKEN } from "../widget.token";

@Component({
  selector: "l9-widget-two",
  templateUrl: "./widget-two.component.html",
  styleUrls: ["./widget-two.component.scss"],
  providers: [
    {
      provide: WIDGET_TOKEN,
      useExisting: WidgetTwoComponent,
    },
  ],
})
export class WidgetTwoComponent implements iWidget, OnInit {
  public isRefreshing = false;

  constructor() {}

  public ngOnInit() {}

  public load() {
    console.log("load Data for WidgetTwo");
  }

  public refresh() {
    this.isRefreshing = true;
    setTimeout(() => {
      this.isRefreshing = false;
    }, 1000);
  }
}
