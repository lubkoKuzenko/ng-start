/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormControl } from "@angular/forms";

import { ValidationMessageComponent } from "./validation-message.component";
import { FormatErrorMessagePipe } from "./format-error-message.pipe";

describe("[VALIDATION] ValidationMessageComponent", () => {
  let component: ValidationMessageComponent;
  let fixture: ComponentFixture<ValidationMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [ValidationMessageComponent, FormatErrorMessagePipe],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("ValidationMessageComponent should create", () => {
    expect(component).toBeTruthy();
  });

  it("return empty object", () => {
    component.control = new FormControl(null);
    expect(component.errors).toEqual({});
  });

  it("return error message ", () => {
    component.control = new FormControl();
    component.control.markAsTouched();
    component.control.setErrors({
      required: true,
    });
    fixture.detectChanges();
    const elem = fixture.debugElement.nativeElement;
    expect(elem.querySelector(".error-message")).toBeTruthy();
    expect(elem.querySelector(".error-message")).toEqual("This field cannot be left blank");
  });

  it("return empty if control not touched ", () => {
    component.control = new FormControl();
    component.control.setErrors({
      required: true,
    });
    expect(component.errors).toEqual({});
  });
});
