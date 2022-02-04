import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { PasswordValidators } from "./form-validators";

@Component({
  template: `
    <h1>Pipes</h1>

    <div>
      <b>toNumber</b>
      => {{ "123" | toNumber }}
    </div>
    <div>
      <b>orderBy</b>
      => {{ [{ name: "Haresh" }, { name: "Paresh" }, { name: "Amit" }] | orderBy: "name" | json }}
    </div>

    <h1>Directives</h1>
    <div>
      <button [debounceTime]="500" bbDebounceClick (debounceClick)="onClick()">Debounce Click</button>
    </div>

    <h1>Presentational Component</h1>
    <test-example [isSubTitleVisible]="true" (click)="log($event)"></test-example>
    <test-example [isSubTitleVisible]="false" (clickWithParam)="log($event)"></test-example>

    <h1>Form Control Validator</h1>
    <form [formGroup]="form">
      <div class="row">
        <div class="col-12">
          <mat-form-field>
            <mat-label>Name</mat-label>
            <input matInput type="text" formControlName="name" />
            <bb-validation-message [control]="form.controls.name"></bb-validation-message>
          </mat-form-field>
        </div>

        <div class="col-12">
          <mat-form-field>
            <mat-label>Password</mat-label>
            <input matInput type="text" formControlName="password" />
            <bb-validation-message [control]="form.controls.password"></bb-validation-message>
          </mat-form-field>
        </div>
      </div>
    </form>
  `,
})
export class UnitTestsComponent {
  public form = new FormGroup({
    name: new FormControl("test", [Validators.required]),
    password: new FormControl("123", PasswordValidators.isValueSatisfyFormatValidator()),
  });

  public onClick() {
    console.log("test");
  }

  public log(event: any) {
    console.log(event);
  }
}
