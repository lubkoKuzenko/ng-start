import { Component, ViewChild, TemplateRef } from "@angular/core";
import { UsersService } from "../../services/users.service";
import { EViewType } from "@shared/enums";

@Component({
  selector: "bb-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
})
export class UsersComponent {
  @ViewChild("cardTemplate", { static: false }) cardTemplate: TemplateRef<HTMLElement>;
  @ViewChild("listTemplate", { static: false }) listTemplate: TemplateRef<HTMLElement>;

  public EViewType = EViewType;
  public mode: EViewType = EViewType.GRID;
  public users$ = this.usersService.getUsers();

  constructor(public usersService: UsersService) {}

  public onViewChage(type: EViewType) {
    this.mode = type;
  }

  public get template() {
    return this.mode == EViewType.GRID ? this.cardTemplate : this.listTemplate;
  }
}
