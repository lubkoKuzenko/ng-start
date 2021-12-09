import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CardsService } from "./cards.service";
import { Card } from "../interfaces";

@Injectable()
export class CardsFacadeService {
  constructor(private readonly cardsService: CardsService) {}

  public getCards(): Observable<Card[]> {
    return this.cardsService.getCards();
  }
}
