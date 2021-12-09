import { Component, ViewChild, TemplateRef } from "@angular/core";
import { EViewType } from "@shared/enums";
import { UsersFacadeService } from "../../services/users-facade.service";

@Component({
  selector: "bb-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
})
export class UsersComponent {
  @ViewChild("cardTemplate", { static: false }) cardTemplate: TemplateRef<HTMLElement>;
  @ViewChild("listTemplate", { static: false }) listTemplate: TemplateRef<HTMLElement>;

  public eViewType = EViewType;
  public mode: EViewType = EViewType.GRID;
  public users$ = this.usersFacadeService.getUsers();

  constructor(public usersFacadeService: UsersFacadeService) {}

  public onViewChage(type: EViewType) {
    this.mode = type;
  }

  public get template() {
    return this.mode === EViewType.GRID ? this.cardTemplate : this.listTemplate;
  }
}
