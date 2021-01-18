import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "l9-validation-message",
  styleUrls: ["validation-message.component.scss"],
  templateUrl: "validation-message.component.html",
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ValidationMessageComponent {
  @Input()
  public control!: FormControl;

  get errors(): { [key: string]: any } {
    return this.control.errors || {};
  }
}
