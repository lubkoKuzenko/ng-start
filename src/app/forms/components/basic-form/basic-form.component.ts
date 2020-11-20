import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "bb-basic-form",
  templateUrl: "./basic-form.component.html",
  styleUrls: ["./basic-form.component.scss"],
})
export class BasicFormComponent implements OnInit {
  @Input() public data;

  public form = new FormGroup({
    firstName: new FormControl("", [Validators.required, Validators.maxLength(3)]),
    lastName: new FormControl("", [Validators.required]),
  });

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
  }
}
