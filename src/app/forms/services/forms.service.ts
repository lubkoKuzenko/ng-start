import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Injectable()
export class FormsService {
  public addGroupToParentForm(parentForm: FormGroup, group: FormGroup) {
    for (const [key, control] of Object.entries(group.controls)) {
      parentForm.addControl(key, control);
    }
    group.setParent(parentForm);
  }
}
