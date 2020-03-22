import { Injectable } from "@angular/core";
import { tap, catchError } from "rxjs/operators";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";

@Injectable()
export class HttpIntercept implements HttpInterceptor {
  constructor() { }
  //function which will be called for all http calls
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(
      tap(event => {
        // console.log("api call success :", event);
      }),
      catchError((error: HttpErrorResponse)=> {
        return throwError(error);
      })
    );
  }
}
