import { Component } from "@angular/core";
import { of } from "rxjs";

@Component({
  templateUrl: "./forms.component.html",
  styleUrls: ["./forms.component.scss"],
})
export class FormsComponent {
  public basicForm$ = of({ firstName: "firstName", lastName: "lastName" });
}
