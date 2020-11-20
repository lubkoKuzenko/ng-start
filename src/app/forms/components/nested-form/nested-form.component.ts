import { Component, ChangeDetectionStrategy } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "bb-nested-form",
  templateUrl: "./nested-form.component.html",
  styleUrls: ["./nested-form.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NestedFormComponent {
  public form = new FormGroup({
    general: new FormGroup({}),
    birthDate: new FormGroup({}),
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
