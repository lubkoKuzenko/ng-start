import { ErrorHandler } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { TokenInterceptor } from './http-token.interceptor';
import { AppErrorInterceptor } from './http-error.interseptor';

export const httpInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  },
  {
    provide: ErrorHandler,
    useClass: AppErrorInterceptor
  }
];
