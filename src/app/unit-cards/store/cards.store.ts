import { Injectable } from "@angular/core";
import { ComponentStore, tapResponse } from "@ngrx/component-store";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";
import { Card } from "../interfaces";
import { CardsService } from "../services/cards.service";

// The state model
export interface CardsState {
  cards: Card[];
  loading: boolean;
}

const defaultState: CardsState = {
  cards: [],
  loading: false,
};

@Injectable()
export class CardsStore extends ComponentStore<CardsState> {
  constructor(public cardsService: CardsService) {
    super(defaultState);
  }

  // SELECTORS
  readonly cards$: Observable<Card[]> = this.select((state) => state.cards);
  readonly loading$: Observable<boolean> = this.select((state) => state.loading);

  // EFFECTS
  public readonly loadCards = this.effect((trigger$: Observable<void>) =>
    trigger$.pipe(
      switchMap(() => {
        this.patchState({ loading: true });

        return this.cardsService.getCards().pipe(
          tapResponse(
            (cards) => this.patchState((state) => ({ ...state, cards: cards || [], loading: false })),
            (_) => this.patchState({ cards: [] }),
          ),
        );
      }),
    ),
  );

  public readonly addCard = this.effect((trigger$: Observable<Card>) =>
    trigger$.pipe(
      switchMap((card: Card) => {
        this.patchState({ loading: true });

        return this.cardsService.addCard(card).pipe(
          tapResponse(
            (newCard: Card) =>
              this.patchState((state) => ({
                ...state,
                cards: [...state.cards, newCard],
                loading: false,
              })),
            (_) => this.patchState((state) => ({ cards: state.cards })),
          ),
        );
      }),
    ),
  );

  public readonly updateCard = this.effect((trigger$: Observable<Card>) =>
    trigger$.pipe(
      switchMap((card: Card) => {
        this.patchState({ loading: true });

        return this.cardsService.updateCard(card).pipe(
          tapResponse(
            () =>
              this.patchState((state) => {
                const updatedCategories = state.cards.map((c: Card) => (c.id === card.id ? { ...c, ...card } : c));

                return {
                  ...state,
                  cards: [...updatedCategories],
                  loading: false,
                };
              }),
            (_) => this.patchState((state) => ({ cards: state.cards })),
          ),
        );
      }),
    ),
  );

  public readonly removeCard = this.effect((trigger$: Observable<string>) =>
    trigger$.pipe(
      switchMap((cardId: string) => {
        this.patchState({ loading: true });

        return this.cardsService.deleteCard(cardId).pipe(
          tapResponse(
            () =>
              this.patchState((state) => ({
                ...state,
                cards: state.cards.filter((card) => card.id !== cardId),
                loading: false,
              })),
            (_) => this.patchState((state) => ({ cards: state.cards })),
          ),
        );
      }),
    ),
  );
}
