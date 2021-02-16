import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[bbUppercase]",
})
export class UppercaseDirective {
  constructor(public ref: ElementRef) {}

  @HostListener("input", ["$event"]) public onInput(event: { target: HTMLInputElement }) {
    this.ref.nativeElement.value = event.target.value.toUpperCase();
  }
}
