import { Action } from '@ngrx/store';
export enum AuthorizationActionTypes {
  LOGIN = '[AUTHORIZATION] Load Authorizations',
  LOGIN_SUCCESS = '[AUTHORIZATION] Load Authorizations Success',
  LOGIN_ERROR = '[AUTHORIZATION] Load Authorizations Error'
}
export class Login implements Action {
  readonly type = AuthorizationActionTypes.LOGIN;
  constructor(public payload: any) {}
}
export class LoginSuccess implements Action {
  readonly type = AuthorizationActionTypes.LOGIN_SUCCESS;
  constructor(public payload: any) {}
}
export class LoginError implements Action {
  readonly type = AuthorizationActionTypes.LOGIN_ERROR;
  constructor(public payload: any) {}
}

export type AuthorizationActions = Login | LoginSuccess | LoginError;
