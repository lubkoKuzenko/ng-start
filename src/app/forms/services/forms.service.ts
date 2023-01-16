import { Injectable } from "@angular/core";
import { UntypedFormGroup } from "@angular/forms";

@Injectable()
export class FormsService {
  public addGroupToParentForm(parentForm: UntypedFormGroup, group: UntypedFormGroup) {
    for (const [key, control] of Object.entries(group.controls)) {
      parentForm.addControl(key, control);
    }
    group.setParent(parentForm);
  }
}
