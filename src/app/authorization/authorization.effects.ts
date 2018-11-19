import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthorizationActionTypes } from './authorization.actions';
import * as AuthorizationActions from './authorization.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';
import { LocalStorageService } from '../core/services/local-storage.service';

@Injectable()
export class AuthorizationEffects {
  constructor(
    private router: Router,
    private permissionsService: NgxPermissionsService,
    private actions$: Actions,
    private localStorageService: LocalStorageService,
    private http: HttpClient
  ) {}

  @Effect()
  login = () => {
    return this.actions$.pipe(
      ofType<AuthorizationActions.Login>(AuthorizationActionTypes.LOGIN),
      switchMap((action: AuthorizationActions.Login) =>
        this.http.post('http://localhost:8000/api/users/', action.payload).pipe(
          map(stock => {
            this.permissionsService.flushPermissions();
            this.permissionsService.addPermission(stock['permission']);
            // TODO interface
            //TODO - what should it be in authorization object? User information? Do we need authorization store then?
            const data = {
              login: stock['login'],
              permission: stock['permission']
            };
            this.localStorageService.setItem('authorization', data);
            this.router.navigate(['/']);
            return new AuthorizationActions.LoginSuccess(data);
          }),
          catchError(error =>
            of(new AuthorizationActions.LoginError({ error }))
          )
        )
      )
    );
  };
}
