import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { take } from "rxjs/operators";

@Component({
  selector: "bb-custom-field-form",
  templateUrl: "./custom-field-form.component.html",
  styleUrls: ["./custom-field-form.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomFieldFormComponent {
  public data: { counter: number } = { counter: 7 };
  public minValue = 0;
  public maxValue = 12;
  public form: FormGroup = new FormGroup({
    counter: new FormControl(this.data.counter, []),
  });

  constructor(private activatedRoute: ActivatedRoute) {}

  public ngOnInit() {
    this.activatedRoute.data.pipe(take(1)).subscribe((data: { counter: number }) => {
      this.data = data;
    });
  }

  public onSubmit() {
    if (this.form.valid) {
      const formValue = this.form.getRawValue();
      console.log(formValue);
    }
  }
}
