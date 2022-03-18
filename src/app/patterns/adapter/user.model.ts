import { Injectable } from "@angular/core";
import { Adapter } from "./adapter";

export class UserModel {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public companyName: string,
    public phone: string,
    public website: string,
  ) {}
}

@Injectable({
  providedIn: "root",
})
export class UserAdapter implements Adapter<UserModel> {
  adapt(item: any): UserModel {
    return new UserModel(item.id, item.name, item.email, item.companyName, item.phone, item.website);
  }
}
