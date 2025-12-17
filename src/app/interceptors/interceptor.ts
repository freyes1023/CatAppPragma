import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
  } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import {
    catchError,
    Observable,
    throwError,
  } from 'rxjs';
import { environment } from 'src/environments/environment';

  
  @Injectable()
  export class RequestInterceptor implements HttpInterceptor {

  
    intercept(
      req: HttpRequest<any>,
      next: HttpHandler,
    ): Observable<HttpEvent<any>> {
      console.debug('Intercepting request:', req.url.slice(0, 70));
      // Agregamos los headers para la X-API-KEY
        const authReq = req.clone({
            headers: req.headers.set('x-api-key',environment.apiKey),
        });
      return next.handle(authReq).pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(() => error);
        }),
      );
    }

  
  }
  