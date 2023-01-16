import { Component, OnInit, Input, ChangeDetectionStrategy } from "@angular/core";

import { UntypedFormGroup, UntypedFormControl, Validators } from "@angular/forms";
import { FormsService } from "../../../services/forms.service";

@Component({
  selector: "bb-form-birthday",
  templateUrl: "./form-birthday.component.html",
  styleUrls: ["./form-birthday.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormBirthdayComponent implements OnInit {
  @Input() public parentForm!: UntypedFormGroup;

  public form = new UntypedFormGroup({
    birthDate: new UntypedFormControl(new Date(), [Validators.required]),
  });

  get controls() {
    return this.form.controls;
  }

  constructor(public formsService: FormsService) {}

  public ngOnInit() {
    this.formsService.addGroupToParentForm(this.parentForm, this.form);
  }
}
