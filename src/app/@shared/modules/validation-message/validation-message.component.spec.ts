/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { UntypedFormControl } from "@angular/forms";

import { ValidationMessageComponent } from "./validation-message.component";
import { FormatErrorMessagePipe } from "./format-error-message.pipe";

describe("[VALIDATION] ValidationMessageComponent", () => {
  let component: ValidationMessageComponent;
  let fixture: ComponentFixture<ValidationMessageComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [],
        declarations: [ValidationMessageComponent, FormatErrorMessagePipe],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationMessageComponent);
    component = fixture.componentInstance;
    component.control = new UntypedFormControl(null);
    fixture.detectChanges();
  });

  it("ValidationMessageComponent should create", () => {
    expect(component).toBeTruthy();
  });
});
