import { Component, OnInit, Input, ChangeDetectionStrategy } from "@angular/core";
import { UntypedFormGroup, UntypedFormControl, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { take } from "rxjs/operators";
import { getDirtyValues } from "../../../../utils/getDirtyValuesFromForm";
import { BasicFormValidators } from "../validators";

@Component({
  selector: "bb-basic-form",
  templateUrl: "./basic-form.component.html",
  styleUrls: ["./basic-form.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicFormComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  public form = new UntypedFormGroup(
    {
      firstName: new UntypedFormControl("", [Validators.required, Validators.maxLength(3)]),
      lastName: new UntypedFormControl("", [Validators.required]),
    },
    { validators: BasicFormValidators.fullNameValidator() },
  );

  get controls() {
    return this.form.controls;
  }

  public ngOnInit() {
    this.activatedRoute.data.pipe(take(1)).subscribe((data) => {
      this.initializeFormValues(data);
    });
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
