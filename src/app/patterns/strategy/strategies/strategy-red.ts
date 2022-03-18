import { Injectable } from "@angular/core";
import { Strategy } from "./abstract-strategy";

@Injectable({
  providedIn: "any",
})
export class StrategyRed extends Strategy {
  constructor() {
    super();
  }

  processOutput(): void {
    console.log("Processing red");
  }
}
