import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "bb-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  public form = new FormGroup({
    firstName: new FormControl("", [Validators.required, Validators.maxLength(3)]),
    lastName: new FormControl("", [Validators.required]),
  });

  get controls() {
    return this.form.controls;
  }

  constructor() {}

  ngOnInit() {}
}
