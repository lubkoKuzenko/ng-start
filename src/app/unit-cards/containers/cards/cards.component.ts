import { Component } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { Card } from "../../interfaces";
import { CardsStore } from "../../store/cards.store";
import { CardFormComponent } from "../../components/card-form/card-form.component";

@Component({
  selector: "bb-cards",
  templateUrl: "./cards.component.html",
  providers: [CardsStore],
})
export class CardsComponent {
  readonly cards$ = this.store.cards$;

  constructor(private readonly store: CardsStore, public dialog: MatDialog) {}

  ngOnInit() {
    this.store.loadCards();
  }

  public onAdd() {
    this.openFormDialog();
  }

  public onEditCard(card: Card) {
    this.openFormDialog(card);
  }

  public onCardDelete(cardId: string) {
    this.store.removeCard(cardId);
  }

  private openFormDialog(card?: Card) {
    const dialogRef = this.dialog.open(CardFormComponent, {
      hasBackdrop: false,
      ...(card && { data: { card } }),
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (!card) {
        return false;
      }

      if (card) {
        this.store.updateCard(result);
      } else {
        this.store.addCard(result);
      }
    });
  }
}
