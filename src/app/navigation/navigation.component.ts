import { Component } from "@angular/core";

@Component({
  selector: "l9-navigation",
  templateUrl: "./navigation.component.html",
})
export class NavigationComponent {
  public menuState = new Map();
  public fullSidebar = true;

  public toggle(menuItem: string) {
    this.menuState.set(menuItem, !this.menuState.get(menuItem) || false);
  }
}
