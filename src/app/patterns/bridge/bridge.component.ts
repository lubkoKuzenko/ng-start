import { Component } from "@angular/core";

@Component({
  selector: "l9-bridge",
  template: `
    <mat-toolbar color="primary">
      <span>Bridge</span>
    </mat-toolbar>

    <div class="grid grid-cols-2 gap-4">
      <l9-widget-wrapper>
        <span slot="header">Widget 1</span>
        <l9-widget-one slot="content"></l9-widget-one>
      </l9-widget-wrapper>

      <l9-widget-wrapper>
        <span slot="header">Widget 2</span>
        <l9-widget-two slot="content"></l9-widget-two>
      </l9-widget-wrapper>
    </div>
  `,
})
export class BridgeComponent {}
