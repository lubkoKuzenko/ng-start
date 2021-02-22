import { Component, Input, TemplateRef, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "l9-users-view",
  templateUrl: "./users-view.component.html",
  styleUrls: ["./users-view.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersViewComponent {
  @Input() users: any[] = [];
  @Input() userTemplate: TemplateRef<HTMLElement>;
}
