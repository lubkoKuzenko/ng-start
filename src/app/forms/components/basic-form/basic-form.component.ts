import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Validators, FormGroup, FormControl } from "@angular/forms";
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

  public form: FormGroup = new FormGroup(
    {
      firstName: new FormControl("", [Validators.required, Validators.maxLength(3)]),
      lastName: new FormControl("", [Validators.required]),
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
