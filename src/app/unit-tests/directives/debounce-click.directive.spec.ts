import { DebounceClickDirective } from "./debounce-click.directive";
import { Component } from "@angular/core";
import { ComponentFixture, TestBed, fakeAsync, tick } from "@angular/core/testing";

@Component({
  template: `
    <button [debounceTime]="500" bbDebounceClick (debounceClick)="onClick()"></button>
  `,
})
class TestComponent {
  onClick() {}
}

describe("[SHARED] DebounceClickDirective", () => {
  let directive: DebounceClickDirective;
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let buttonEl: HTMLElement;

  beforeEach(() => {
    directive = new DebounceClickDirective();
    TestBed.configureTestingModule({
      declarations: [TestComponent, DebounceClickDirective],
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    buttonEl = fixture.debugElement.nativeElement.querySelector("button");
    fixture.detectChanges();
  });

  it("should create a directive", () => {
    expect(directive).toBeTruthy();
  });

  it("should create a component", () => {
    expect(component).toBeDefined();
  });

  it("button click should emit event more than debounceTime", fakeAsync(() => {
    const spy = spyOn(component, "onClick");
    buttonEl.click();
    fixture.detectChanges();
    tick(1000);
    expect(spy).toHaveBeenCalled();
  }));

  it("button click should not emit event less than debounceTime", () => {
    const spy = spyOn(component, "onClick");
    buttonEl.click();
    fixture.detectChanges();
    expect(spy).not.toHaveBeenCalled();
  });
});
