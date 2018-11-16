import { Action } from '@ngrx/store';
export enum AuthorizationActionTypes {
  USER_LOGIN = '[Authorization] Load Authorizations',
  USER_LOGIN_SUCCESS = '[Authorization] Load Authorizations Success',
  USER_LOGIN_ERROR = '[Authorization] Load Authorizations Error'
}
export class LoginUser implements Action {
  readonly type = AuthorizationActionTypes.USER_LOGIN;
  constructor(public payload: any) {}
}
export class LoginUserSuccess implements Action {
  readonly type = AuthorizationActionTypes.USER_LOGIN_SUCCESS;
  constructor(public payload: any) {}
}
export class LoginUserError implements Action {
  readonly type = AuthorizationActionTypes.USER_LOGIN_ERROR;
  constructor(public payload: any) {}
}
export type AuthorizationActions =
  | LoginUser
  | LoginUserSuccess
  | LoginUserError;
