import { Component, OnInit, Input, ChangeDetectionStrategy } from "@angular/core";
import { UntypedFormGroup, UntypedFormControl, Validators } from "@angular/forms";
import { FormsService } from "../../../services/forms.service";

@Component({
  selector: "bb-form-general",
  templateUrl: "./form-general.component.html",
  styleUrls: ["./form-general.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormGeneralComponent implements OnInit {
  @Input() public parentForm!: UntypedFormGroup;

  public form = new UntypedFormGroup({
    name: new UntypedFormControl("", [Validators.required]),
    description: new UntypedFormControl("", [Validators.required]),
  });

  get controls() {
    return this.form.controls;
  }

  constructor(public formsService: FormsService) {}

  public ngOnInit() {
    this.formsService.addGroupToParentForm(this.parentForm, this.form);
  }
}
