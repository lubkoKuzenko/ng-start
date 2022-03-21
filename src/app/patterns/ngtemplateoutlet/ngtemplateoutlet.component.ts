import { Component } from "@angular/core";

@Component({
  selector: "l9-ngtemplateoutlet",
  templateUrl: "./ngtemplateoutlet.component.html",
})
export class NgtemplateoutletComponent {
  public data_1 = Array.from({ length: 10 }).map((_, i) => `${i}`);
  public data_2 = Array.from({ length: 5 }).map((_, i) => `${i}`);
  public data_3 = Array.from({ length: 3 }).map((_, i) => `${i}`);
}
