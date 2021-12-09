import { Component } from "@angular/core";
import { map } from "rxjs/operators";
import { CardsStore } from "../../store/cards.store";

@Component({
  selector: "bb-cards",
  templateUrl: "./cards.component.html",
  providers: [CardsStore],
})
export class CardsComponent {
  readonly cards$ = this.store.state$.pipe(map((state) => state.cards));

  constructor(private readonly store: CardsStore) {}

  ngOnInit() {
    this.store.loadCards();
  }
}
