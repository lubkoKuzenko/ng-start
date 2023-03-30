import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatListModule } from "@angular/material/list";
import { AlphabeticalListComponent } from "./alphabetical-list.component";
import { AlphabeticalListItemContentDirective } from "./list-item-content.directive";

const ALPHABETICAL_LIST_COMPONENTS = [AlphabeticalListComponent, AlphabeticalListItemContentDirective];

@NgModule({
  declarations: [...ALPHABETICAL_LIST_COMPONENTS],
  imports: [CommonModule, MatListModule],
  exports: [...ALPHABETICAL_LIST_COMPONENTS],
})
export class AlphabeticalListModule {}
