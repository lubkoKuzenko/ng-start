import { Component, Input } from "@angular/core";

@Component({
  selector: "l9-card-view",
  templateUrl: "./card-view.component.html",
  styleUrls: ["./card-view.component.scss"],
})
export class CardViewComponent {
  @Input() cards: any[] = [];
}
