import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../../../environments/environment';

@Injectable()
export class Interceptor implements HttpInterceptor {
  public access_token = localStorage.getItem('access_token');
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.access_token}`
      }
    });

    return next.handle(request);

  }

}