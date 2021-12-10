import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "l9-card-view",
  templateUrl: "./card-view.component.html",
  styleUrls: ["./card-view.component.scss"],
})
export class CardViewComponent {
  @Input() cards: any[] = [];

  @Output() delete = new EventEmitter<string>();

  public onDelete(cardId: string) {
    this.delete.emit(cardId);
  }
}
