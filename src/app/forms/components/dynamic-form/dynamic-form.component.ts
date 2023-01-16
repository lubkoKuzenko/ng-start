import { Component } from "@angular/core";
import { UntypedFormGroup, UntypedFormArray, UntypedFormControl, Validators } from "@angular/forms";

@Component({
  selector: "bb-dynamic-form",
  templateUrl: "./dynamic-form.component.html",
  styleUrls: ["./dynamic-form.component.scss"],
})
export class DynamicFormComponent {
  public form: UntypedFormGroup = new UntypedFormGroup({
    userName: new UntypedFormControl("Lyubomyr", [Validators.required]),
    timeRanges: new UntypedFormArray([]),
  });

  get controls() {
    return this.form.controls;
  }

  get timeRangeControls() {
    return this.form.get("timeRanges") as UntypedFormArray;
  }

  public addNewTimeRange() {
    this.timeRangeControls.push(this.singleRange());
  }

  public deleteTimeRange(i: number) {
    this.timeRangeControls.removeAt(i);
  }

  public onSubmit() {
    console.log(this.form.getRawValue());
  }

  private singleRange() {
    return new UntypedFormGroup({
      startDate: new UntypedFormControl("", []),
      endDate: new UntypedFormControl("", []),
    });
  }
}
