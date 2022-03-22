import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../interfaces";
import { shareReplay, take } from "rxjs/operators";

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>("https://61b194e53c954f001722aa1c.mockapi.io/api/users").pipe(take(1), shareReplay(1));
  }
}
