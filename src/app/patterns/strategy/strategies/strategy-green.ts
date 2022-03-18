import { Injectable } from "@angular/core";
import { Strategy } from "./abstract-strategy";

@Injectable({
  providedIn: "any",
})
export class StrategyGreen extends Strategy {
  constructor() {
    super();
  }

  processOutput(): void {
    console.log("Processing green");
  }
}
