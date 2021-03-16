import { Component, OnInit } from "@angular/core";
import { iWidget } from "../interfaces/widget-interface";
import { WIDGET_TOKEN } from "../widget.token";

@Component({
  selector: "l9-widget-one",
  templateUrl: "./widget-one.component.html",
  styleUrls: ["./widget-one.component.scss"],
  providers: [
    {
      provide: WIDGET_TOKEN,
      useExisting: WidgetOneComponent,
    },
  ],
})
export class WidgetOneComponent implements iWidget, OnInit {
  public isRefreshing = false;

  constructor() {}

  public ngOnInit() {}

  public load() {
    console.log("load Data for WidgetOne");
  }

  public refresh() {
    this.isRefreshing = true;
    setTimeout(() => {
      this.isRefreshing = false;
    }, 1000);
  }
}
