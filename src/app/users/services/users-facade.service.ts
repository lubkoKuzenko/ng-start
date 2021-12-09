import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UsersService } from "./users.service";
import { User } from "../interfaces";

@Injectable()
export class UsersFacadeService {
  constructor(private readonly usersService: UsersService) {}

  public getUsers(): Observable<User[]> {
    return this.usersService.getUsers();
  }
}
