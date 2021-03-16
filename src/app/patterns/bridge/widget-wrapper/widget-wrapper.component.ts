import { Component, OnInit, ContentChild } from "@angular/core";
import { WIDGET_TOKEN } from "../widget.token";
import { iWidget } from "../interfaces/widget-interface";

@Component({
  selector: "l9-widget-wrapper",
  templateUrl: "./widget-wrapper.component.html",
  styleUrls: ["./widget-wrapper.component.scss"],
})
export class WidgetWrapperComponent implements OnInit {
  @ContentChild(WIDGET_TOKEN as any, { static: true }) public widget: iWidget;

  constructor() {}

  public ngOnInit() {
    this.widget.load();
  }

  public onRefresh() {
    this.widget.refresh();
  }
}
