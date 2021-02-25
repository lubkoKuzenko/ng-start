import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "l9-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  public form = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.maxLength(2)]),
    description: new FormControl(undefined, [Validators.required]),
  });

  get controls() {
    return this.form.controls;
  }
}
