import { Injectable } from "@angular/core";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { finalize, retry } from "rxjs/operators";

import { LoaderService } from "@core/services/loader.service";

@Injectable({
  providedIn: "root",
})
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(public loaderService: LoaderService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.display(true);
    // If the call fails, retry until 2 times before throwing an error
    return next.handle(request).pipe(
      retry(2),
      finalize(() => {
        this.loaderService.display(false);
      }),
    );
  }
}
