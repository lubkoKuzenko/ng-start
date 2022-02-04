import { Directive, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output } from "@angular/core";
import { ReplaySubject } from "rxjs";
import { debounceTime } from "rxjs/operators";

@Directive({
  selector: "[bbDebounceClick]",
})
export class DebounceClickDirective implements OnInit, OnDestroy {
  @Input()
  debounceTime = 500;
  @Output()
  debounceClick = new EventEmitter();
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor() {}

  @HostListener("click", ["$event"])
  clickEvent(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.destroyed$.next(true);
  }

  ngOnInit() {
    this.destroyed$.pipe(debounceTime(this.debounceTime)).subscribe((e) => this.debounceClick.emit(e));
  }

  ngOnDestroy() {
    this.destroyed$.complete();
  }
}
