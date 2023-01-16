import { Component } from "@angular/core";
import { UntypedFormControl, UntypedFormGroup, Validators } from "@angular/forms";

@Component({
  selector: "bb-nested-form-directive",
  templateUrl: "./nested-form-directive.component.html",
  styleUrls: ["./nested-form-directive.component.scss"],
})
export class NestedFormDirectiveComponent {
  public form = new UntypedFormGroup({
    fullname: new UntypedFormControl("", [Validators.required]),
    birthDate: new UntypedFormControl("", []),
  });

  get controls() {
    return this.form.controls;
  }

  public onSubmit() {
    if (this.form.valid) {
      const formValue = this.form.getRawValue();
      console.log(formValue);
    }
  }
}
