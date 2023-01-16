import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { UntypedFormControl } from "@angular/forms";

@Component({
  selector: "bb-validation-message",
  styleUrls: ["validation-message.component.scss"],
  templateUrl: "validation-message.component.html",
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ValidationMessageComponent {
  @Input()
  public control!: UntypedFormControl;

  get errors(): { [key: string]: any } {
    return this.control.errors || {};
  }
}
