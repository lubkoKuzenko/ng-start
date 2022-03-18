import { Component, Injector, OnInit } from "@angular/core";
import { Strategy, StrategyMap } from "./strategies";

@Component({
  selector: "l9-bridge",
  template: `
    <mat-toolbar color="primary">
      <span>Strategy</span>
    </mat-toolbar>

    <div class="grid grid-cols-1">
      <div class="flex flex-row">
        <mat-slide-toggle color="primary" [(ngModel)]="checked" (change)="toggleHandler($event.checked)">
          {{ checked ? "Green Strategy" : "Red  Strategy" }}
        </mat-slide-toggle>
      </div>

      <button (click)="onApplyClick()">Apply Strategy</button>
    </div>
  `,
})
export class StrategyComponent implements OnInit {
  public checked = false;
  public strategy: Strategy;

  constructor(private injector: Injector) {}

  ngOnInit() {
    this.strategy = this.injector.get<Strategy>(StrategyMap.get(false));
  }

  public toggleHandler(isChecked: boolean) {
    this.strategy = this.injector.get<Strategy>(StrategyMap.get(isChecked));
  }

  public onApplyClick() {
    this.strategy.processOutput();
  }
}
