import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: "root" })
export class LoaderService {
  private isVisible: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get status() {
    return this.isVisible;
  }

  display(value: boolean) {
    this.isVisible.next(value);
  }
}
