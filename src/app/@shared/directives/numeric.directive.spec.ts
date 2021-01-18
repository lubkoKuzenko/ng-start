import { Component, DebugElement } from "@angular/core";
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

@Component({
  template: `
    <input type="text" name="txtnumericTest" bbNumeric />
  `,
})
class TestNumericComponent {}
describe("[swarco.ui.modules.tlc:shared]: NumberDirective", () => {
  let component: TestNumericComponent;
  let fixture: ComponentFixture<TestNumericComponent>;
  let numericInput: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [TestNumericComponent],
    });

    fixture = TestBed.createComponent(TestNumericComponent);
    component = fixture.componentInstance;
    numericInput = fixture.debugElement.query(By.css("input[name=txtnumericTest]"));
    fixture.detectChanges();
  });

  it("Entering email and password emits loggedIn event", () => {
    numericInput.nativeElement.value = "12345";
    numericInput.nativeElement.dispatchEvent(new KeyboardEvent("input", { key: "a" }));
    expect(numericInput.nativeElement.value).toBe("12345");
  });
});
