import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { UntypedFormGroup, FormGroupDirective } from "@angular/forms";

@Component({
  selector: "bb-form-fullname",
  templateUrl: "./field-fullname.component.html",
  styleUrls: ["./field-fullname.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFullNameComponent implements OnInit {
  public form!: UntypedFormGroup;

  get controls() {
    return this.form && this.form.controls;
  }

  constructor(private rootFormGroup: FormGroupDirective) {}

  public ngOnInit() {
    this.form = this.rootFormGroup.control;
  }
}
