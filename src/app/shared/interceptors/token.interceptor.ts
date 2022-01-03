import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    intercept(
        request: HttpRequest<unknown>,
        next: HttpHandler
    ): Observable<HttpEvent<unknown>> {
        const headers = {
            'x-Auth-Token': '6a4c3b3cf0294891afd5b93d4bd9fb09',
        };

        const modifiedRequest: HttpRequest<unknown> = request.clone({
            headers: new HttpHeaders(headers),
        });

        return next.handle(modifiedRequest);
    }
}
