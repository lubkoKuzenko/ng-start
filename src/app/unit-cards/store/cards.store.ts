import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { EMPTY, Observable } from "rxjs";
import { catchError, switchMap, tap } from "rxjs/operators";
import { Card } from "../interfaces";
import { CardsService } from "../services/cards.service";

export interface CardsState {
  cards: Card[];
  loading: boolean;
}

@Injectable()
export class CardsStore extends ComponentStore<CardsState> {
  constructor(public cardsService: CardsService) {
    super({ cards: [], loading: false });
  }

  public readonly loadCards = this.effect((trigger$: Observable<void>) =>
    trigger$.pipe(
      switchMap(() => {
        this.patchState({ cards: [], loading: true });

        return this.cardsService.getCards().pipe(
          tap((cards) => this.patchState({ cards, loading: false })),
          catchError((err) => {
            this.patchState({ cards: [] });
            return EMPTY;
          }),
        );
      }),
    ),
  );
}
