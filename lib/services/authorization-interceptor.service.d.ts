import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersService } from './users.service';
export declare class AuthorizationInterceptorService implements HttpInterceptor {
    private usersSvc;
    constructor(usersSvc: UsersService);
    withAccessToken(req: HttpRequest<any>): HttpRequest<any>;
    withRefreshToken(req: HttpRequest<any>): HttpRequest<any>;
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
}
