import { Component } from "@angular/core";
import { DataService } from "./users.service";

@Component({
  template: `
    <div class="grid grid-cols-2 gap-2">
      <ng-container *ngFor="let user of users$ | async">
        <ng-container *ngFor="let user2 of usersAdopt$ | async">
          <div class="mt-2 p-4 bg-orange-200">
            <label class="font-mono text-xl">Before</label>
            <pre>{{ user | json }}</pre>
          </div>

          <div class="mt-2 p-4 bg-lime-200">
            <label class="font-mono text-xl">After</label>
            <pre>{{ user2 | json }}</pre>
          </div>
        </ng-container>
      </ng-container>
    </div>
  `,
})
export class AdapterComponent {
  public users$ = this.usersService.getUsers();
  public usersAdopt$ = this.usersService.getUsersAndAdopt();

  constructor(private readonly usersService: DataService) {}
}
