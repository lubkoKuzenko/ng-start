import { Component, OnInit, Input, ChangeDetectionStrategy } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { getDirtyValues } from "../../../../utils/getDirtyValuesFromForm";
import { BasicFormValidators } from "../validators";

@Component({
  selector: "bb-basic-form",
  templateUrl: "./basic-form.component.html",
  styleUrls: ["./basic-form.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicFormComponent implements OnInit {
  @Input() public data;

  public form = new FormGroup(
    {
      firstName: new FormControl("", [Validators.required, Validators.maxLength(3)]),
      lastName: new FormControl("", [Validators.required]),
    },
    { validators: BasicFormValidators.fullNameValidator() },
  );

  get controls() {
    return this.form.controls;
  }

  constructor() {}

  public ngOnInit() {
    this.initializeFormValues(this.data);
  }

  // reset form
  public reset() {
    this.form.reset();
  }

  // populate form values
  public initializeFormValues(data: any) {
    this.form.patchValue({ ...data });
  }

  // GET form values
  public onSubmit() {
    console.log(this.form.getRawValue());
    console.log(getDirtyValues(this.form));
  }
}
