import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NavigateService } from './services/navigate.service';
@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor{

    constructor(private navigateService: NavigateService){}

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(catchError((error: HttpErrorResponse) => {
            return this.handleError(req, error);
        }));

    }

    private handleError(req: HttpRequest<any>, error: HttpErrorResponse): Observable<never>{
        let message = '';
        if (error.error instanceof ErrorEvent){
            message = `Error: ${error.error.message}`;
        } else {
            message = `Error: code ${error.status}\n Message: ${error.message}`;
            switch (error.status){
                case 403:
                    this.navigateService.goToAccessDeniedPage();
                    break;
                case 404:
                    this.navigateService.goToNotFoundPage();
                    break;
                case 500:
                    this.navigateService.goToErrorPage();
                    break;
                default:
                    this.navigateService.goToErrorPage();
                    break;
            }
        }
        return throwError(message);
    }
}
