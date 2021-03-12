import { Component, OnInit, Input, ChangeDetectionStrategy } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { FormsService } from "../../../services/forms.service";

@Component({
  selector: "bb-form-general",
  templateUrl: "./form-general.component.html",
  styleUrls: ["./form-general.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormGeneralComponent implements OnInit {
  @Input() public parentForm!: FormGroup;

  public form = new FormGroup({
    name: new FormControl("", [Validators.required]),
    description: new FormControl("", [Validators.required]),
  });

  get controls() {
    return this.form.controls;
  }

  constructor(public formsService: FormsService) {}

  public ngOnInit() {
    this.formsService.addGroupToParentForm(this.parentForm, this.form);
  }
}
