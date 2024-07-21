import {
  HttpInterceptor,
  HttpRequest,
  HttpEvent,
  HttpHandler,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //Obteniendo un token
    const token: string = 'TOKEN XXXX';
    let request = req;

    if (token) {
      request = req.clone({
        setHeaders: {
          authorization: 'Bearer' + token,
        },
      });
    }
    return next.handle(request);
  }
}
