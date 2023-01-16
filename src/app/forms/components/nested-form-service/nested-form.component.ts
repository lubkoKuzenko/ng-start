import { Component, ChangeDetectionStrategy } from "@angular/core";
import { UntypedFormGroup } from "@angular/forms";

@Component({
  selector: "bb-nested-form",
  templateUrl: "./nested-form.component.html",
  styleUrls: ["./nested-form.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NestedFormComponent {
  public form = new UntypedFormGroup({
    general: new UntypedFormGroup({}),
    birthDate: new UntypedFormGroup({}),
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
