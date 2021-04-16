import { Directive, Inject, Input, TemplateRef, ViewContainerRef } from "@angular/core";

export class LetContext<T> {
  constructor(private readonly dir: LetDirective<T>) {}

  get ngLet(): T {
    return this.dir.ngLet;
  }
}

/**
 * Works like *ngIf but does not have a condition
 * Use it to declare the result of pipes calculation
 * (i.e. async pipe)
 *
 * <ng-container *ngLet="stream$ | async as value">
 *   {{ value }}
 * </ng-container>
 */
@Directive({
  selector: "[bbNgLet]",
})
export class LetDirective<T> {
  @Input()
  ngLet: T;

  constructor(
    @Inject(ViewContainerRef) viewContainer: ViewContainerRef,
    @Inject(TemplateRef) templateRef: TemplateRef<LetContext<T>>,
  ) {
    viewContainer.createEmbeddedView(templateRef, new LetContext<T>(this));
  }
}
