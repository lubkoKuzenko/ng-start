import { Component } from "@angular/core";
import { of } from "rxjs";

@Component({
  selector: "l9-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  vsData$ = of(Array.from({ length: 1000 }).map((_, i) => `Item #${i}`));
}
