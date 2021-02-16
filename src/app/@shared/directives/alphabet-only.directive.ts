import { Directive, HostListener } from "@angular/core";

@Directive({
  selector: "[bbAlphabetOnly]",
})
export class AlphabetOnlyDirective {
  @HostListener("keydown", ["$event"]) public onKeydown(event: KeyboardEvent) {
    if (
      (event.keyCode >= 15 && event.keyCode <= 64) ||
      event.keyCode >= 123 ||
      (event.keyCode >= 96 && event.keyCode <= 105)
    ) {
      event.preventDefault();
    }
  }
}
