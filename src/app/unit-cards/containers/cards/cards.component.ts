import { Component } from "@angular/core";
import { CardsFacadeService } from "../../services/cards-facade.service";

@Component({
  selector: "bb-cards",
  templateUrl: "./cards.component.html",
})
export class CardsComponent {
  public cards$ = this.cardsFacadeService.getCards();

  constructor(public cardsFacadeService: CardsFacadeService) {}
}
