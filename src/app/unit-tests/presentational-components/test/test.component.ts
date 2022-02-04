import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "test-example",
  template: `
    <div class="border p-3 m-1">
      <h6 class="title">Test Components</h6>
      <span *ngIf="isSubTitleVisible" class="sub-title">sub title</span>
      <button data-role="test-action-button" (click)="onClick()">click me</button>
      <button data-role="test-action-with-param-button" (click)="onClickWithParam('string param')">
        click me with data
      </button>
    </div>
  `,
})
export class TestComponent {
  @Input() public isSubTitleVisible = false;
  @Output() public click = new EventEmitter<{ someData: string }>();
  @Output() public clickWithParam = new EventEmitter<string>();

  public onClick() {
    this.click.emit({ someData: "test string" });
  }

  public onClickWithParam(event: string) {
    this.clickWithParam.emit(event);
  }
}
