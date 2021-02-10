import { Injectable } from "@angular/core";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from "@angular/common/http";
import { Observable, of } from "rxjs";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  logStyle = "color: red; font-size: 1rem;";

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add a custom header
    request = request.clone({
      setHeaders: {
        authorization: "Bearer token",
      },
    });

    return next.handle(request);
  }
}
