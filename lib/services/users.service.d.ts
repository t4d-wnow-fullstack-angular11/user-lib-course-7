import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CurrentUser } from '../models/CurrentUser';
export declare class UsersService {
    private httpClient;
    private accessToken;
    private currentUser;
    constructor(httpClient: HttpClient);
    loginEmployee(username: string, password: string): Observable<CurrentUser>;
    refreshUser(): Observable<Observable<boolean>>;
    changePassword(username: string, userKind: string, oldPassword: string, newPassword: string): Observable<{}>;
    getCurrentUser(): CurrentUser | null;
    getAccessToken(): string | null;
    getRefreshToken(): string | null;
    logoutUser(): void;
}
