import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthorizationActionTypes } from './authorization.actions';
import * as AuthorizationActions from './authorization.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Injectable()
export class AuthorizationEffects {
  constructor(
    private router: Router,
    private permissionsService: NgxPermissionsService,
    private actions$: Actions,
    private http: HttpClient
  ) {}

  @Effect()
  loginUser = () => {
    return this.actions$.pipe(
      ofType<AuthorizationActions.LoginUser>(
        AuthorizationActionTypes.USER_LOGIN
      ),
      switchMap((action: AuthorizationActions.LoginUser) =>
        // TODO change url hardcoded
        this.http.post('http://localhost:8000/api/users/', action.payload).pipe(
          map(stock => {
            this.permissionsService.flushPermissions();
            this.permissionsService.addPermission(stock['permission']);
            localStorage.setItem('permission', stock['permission']);
            localStorage.setItem('login', stock['login']);
            this.router.navigate(['/']);
            return new AuthorizationActions.LoginUserSuccess(stock);
          }),
          catchError(error =>
            of(new AuthorizationActions.LoginUserError({ error }))
          )
        )
      )
    );
  };
}
