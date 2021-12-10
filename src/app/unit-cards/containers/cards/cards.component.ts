import { Component } from "@angular/core";
import { CardsStore } from "../../store/cards.store";

@Component({
  selector: "bb-cards",
  templateUrl: "./cards.component.html",
  providers: [CardsStore],
})
export class CardsComponent {
  readonly cards$ = this.store.cards$;

  constructor(private readonly store: CardsStore) {}

  ngOnInit() {
    this.store.loadCards();
  }

  public onCardDelete(cardId: string) {
    this.store.removeCard(cardId);
    console.log(cardId);
  }
}
