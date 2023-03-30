import { Directive, Input } from "@angular/core";

@Directive()
export abstract class BaseItemComponent<T = unknown> {
  @Input()
  public data!: T;
}
