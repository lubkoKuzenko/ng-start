import { DOCUMENT } from "@angular/common";
import { Component, Inject, Renderer2 } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { menuTop } from "./menu-json.config";
import { MenuItem } from "./menu.interface";

@Component({
  selector: "l9-navigation",
  templateUrl: "./navigation.component.html",
})
export class NavigationComponent {
  public menuState = new Map();
  public fullSidebar = true;
  public mode =
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
      ? "dark"
      : "light";
  public menuTop: Array<MenuItem> = menuTop;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    public renderer: Renderer2,
    public translate: TranslateService,
  ) {
    this.renderer.addClass(this.document.body, this.mode);

    translate.addLangs(["en", "de"]);

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|de/) ? browserLang : "en");
  }

  public toggle(menuItem: string) {
    this.menuState.set(menuItem, !this.menuState.get(menuItem) || false);
  }

  public onThemeToggle() {
    this.renderer.removeClass(this.document.body, this.mode);
    this.mode = this.mode === "dark" ? "light" : "dark";
    this.renderer.addClass(this.document.body, this.mode);
    localStorage.setItem("theme", this.mode);
  }
}
