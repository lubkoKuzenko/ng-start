import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "bb-nested-form-directive",
  templateUrl: "./nested-form-directive.component.html",
  styleUrls: ["./nested-form-directive.component.scss"],
})
export class NestedFormDirectiveComponent {
  public form = new FormGroup({
    fullname: new FormControl("", [Validators.required]),
    birthDate: new FormControl("", []),
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
