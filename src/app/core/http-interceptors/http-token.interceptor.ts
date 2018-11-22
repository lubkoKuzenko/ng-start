import { Injectable, Injector, ErrorHandler } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpResponse,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  logStyle = 'color: red; font-size: 1rem;';

  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // add a custom header
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer token`
      }
    });

    return next.handle(request).pipe(
      tap(
        (event: HttpEvent<any>) => {
          this.onSuccess(event);
        },
        (error: any) => {
          this.onError(error);
        }
      )
    );
  }

  onSuccess(event) {
    if (event instanceof HttpResponse) {
      // Intercepting HTTP responses
    }
  }

  onError(error) {
    if (error instanceof HttpErrorResponse) {
      console.log('%cHttp error message: ' + error.message, this.logStyle);
    }
  }
}
