import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Card } from "../../interfaces";

@Component({
  selector: "l9-card-view",
  templateUrl: "./card-view.component.html",
  styleUrls: ["./card-view.component.scss"],
})
export class CardViewComponent {
  @Input() cards: Card[] = [];

  @Output() edit = new EventEmitter<Card>();
  @Output() delete = new EventEmitter<string>();

  public onEdit(card: Card) {
    this.edit.emit(card);
  }

  public onDelete(cardId: string) {
    this.delete.emit(cardId);
  }
}
