import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, shareReplay, take } from "rxjs/operators";
import { User } from "./user.interface";
import { UserAdapter, UserModel } from "./user.model";

@Injectable({
  providedIn: "root",
})
export class DataService {
  constructor(private http: HttpClient, private adapter: UserAdapter) {}

  getUsers() {
    return this.http.get<User[]>("https://jsonplaceholder.typicode.com/users");
  }

  getUsersAndAdopt(): Observable<UserModel[]> {
    return this.http.get<User[]>("https://jsonplaceholder.typicode.com/users").pipe(
      take(1),
      shareReplay(1),
      map((data: any[]) => data.map((item) => this.adapter.adapt(item))),
    );
  }
}
