import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { FormGroup, FormGroupDirective } from "@angular/forms";

@Component({
  selector: "bb-form-fullname",
  templateUrl: "./field-fullname.component.html",
  styleUrls: ["./field-fullname.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFullNameComponent implements OnInit {
  public form!: FormGroup;

  get controls() {
    return this.form && this.form.controls;
  }

  constructor(private rootFormGroup: FormGroupDirective) {}

  public ngOnInit() {
    this.form = this.rootFormGroup.control;
  }
}
