import { Component } from "@angular/core";
import { FormGroup, FormArray, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "bb-dynamic-form",
  templateUrl: "./dynamic-form.component.html",
  styleUrls: ["./dynamic-form.component.scss"],
})
export class DynamicFormComponent {
  public form: FormGroup = new FormGroup({
    userName: new FormControl("Lyubomyr", [Validators.required]),
    timeRanges: new FormArray([]),
  });

  get controls() {
    return this.form.controls;
  }

  get timeRangeControls() {
    return this.form.get("timeRanges") as FormArray;
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
    return new FormGroup({
      startDate: new FormControl("", []),
      endDate: new FormControl("", []),
    });
  }
}
