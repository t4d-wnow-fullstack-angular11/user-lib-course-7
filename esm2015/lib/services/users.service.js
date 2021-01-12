import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { CurrentUser } from '../models/CurrentUser';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class UsersService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.accessToken = null;
        this.currentUser = null;
    }
    loginEmployee(username, password) {
        return this.httpClient
            .post('/api/users/login', { username, password, kind: 'employee' })
            .pipe(tap(userResult => {
            this.accessToken = userResult.accessToken;
            localStorage.refreshToken = userResult.refreshToken;
        }), map(userResult => {
            const currentUser = new CurrentUser(userResult.username, userResult.userKind, userResult.displayName);
            userResult.roles.forEach(role => currentUser.addRole(role));
            return currentUser;
        }), tap(currentUser => {
            this.currentUser = currentUser;
        }));
    }
    refreshUser() {
        return this.httpClient.get('/api/users/refresh').pipe(tap(userRefresh => {
            this.accessToken = userRefresh.accessToken;
            localStorage.refreshToken = userRefresh.refreshToken;
        }), map(() => of(true)));
    }
    changePassword(username, userKind, oldPassword, newPassword) {
        return this.httpClient.post('/api/users/change-password', {
            username, userKind, oldPassword, newPassword,
        });
    }
    getCurrentUser() {
        return this.currentUser;
    }
    getAccessToken() {
        return this.accessToken;
    }
    getRefreshToken() {
        return localStorage.refreshToken;
    }
    logoutUser() {
        this.accessToken = null;
        this.currentUser = null;
        localStorage.refreshToken = null;
    }
}
UsersService.ɵprov = i0.ɵɵdefineInjectable({ factory: function UsersService_Factory() { return new UsersService(i0.ɵɵinject(i1.HttpClient)); }, token: UsersService, providedIn: "root" });
UsersService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
UsersService.ctorParameters = () => [
    { type: HttpClient }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi9wcm9qZWN0cy91c2VyLWxpYi9zcmMvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvdXNlcnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFJMUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7QUFLcEQsTUFBTSxPQUFPLFlBQVk7SUFLdkIsWUFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUhsQyxnQkFBVyxHQUFrQixJQUFJLENBQUM7UUFDbEMsZ0JBQVcsR0FBdUIsSUFBSSxDQUFDO0lBRUQsQ0FBQztJQUV4QyxhQUFhLENBQUMsUUFBZ0IsRUFBRSxRQUFnQjtRQUVyRCxPQUFPLElBQUksQ0FBQyxVQUFVO2FBQ25CLElBQUksQ0FDSCxrQkFBa0IsRUFDbEIsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsQ0FBQzthQUMxQyxJQUFJLENBQ0gsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ2YsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDO1lBQzFDLFlBQVksQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDLFlBQVksQ0FBQztRQUN0RCxDQUFDLENBQUMsRUFDRixHQUFHLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDZixNQUFNLFdBQVcsR0FBRyxJQUFJLFdBQVcsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3RHLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzVELE9BQU8sV0FBVyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxFQUNGLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUNoQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQTtRQUNoQyxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ04sQ0FBQztJQUVNLFdBQVc7UUFDaEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBYyxvQkFBb0IsQ0FBQyxDQUFDLElBQUksQ0FDaEUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLFdBQVcsQ0FBQztZQUMzQyxZQUFZLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQyxZQUFZLENBQUM7UUFDdkQsQ0FBQyxDQUFDLEVBQ0YsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUNwQixDQUFDO0lBQ0osQ0FBQztJQUVNLGNBQWMsQ0FBQyxRQUFnQixFQUFFLFFBQWdCLEVBQUUsV0FBbUIsRUFBRSxXQUFtQjtRQUNoRyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUN6Qiw0QkFBNEIsRUFDNUI7WUFDRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxXQUFXO1NBQzdDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxjQUFjO1FBQ25CLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBRU0sY0FBYztRQUNuQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUVNLGVBQWU7UUFDcEIsT0FBTyxZQUFZLENBQUMsWUFBWSxDQUFDO0lBQ25DLENBQUM7SUFFTSxVQUFVO1FBQ2YsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsWUFBWSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7SUFDbkMsQ0FBQzs7OztZQWxFRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQVZRLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBVc2VyUmVzdWx0IH0gZnJvbSAnLi4vbW9kZWxzL1VzZXJSZXN1bHQnO1xuaW1wb3J0IHsgVXNlclJlZnJlc2ggfSBmcm9tICcuLi9tb2RlbHMvVXNlclJlZnJlc2gnO1xuaW1wb3J0IHsgQ3VycmVudFVzZXIgfSBmcm9tICcuLi9tb2RlbHMvQ3VycmVudFVzZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBVc2Vyc1NlcnZpY2Uge1xuXG4gIHByaXZhdGUgYWNjZXNzVG9rZW46IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIGN1cnJlbnRVc2VyOiBDdXJyZW50VXNlciB8IG51bGwgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cENsaWVudDogSHR0cENsaWVudCkgeyB9XG5cbiAgcHVibGljIGxvZ2luRW1wbG95ZWUodXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IE9ic2VydmFibGU8Q3VycmVudFVzZXI+IHtcblxuICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnRcbiAgICAgIC5wb3N0PFVzZXJSZXN1bHQ+KFxuICAgICAgICAnL2FwaS91c2Vycy9sb2dpbicsXG4gICAgICAgIHsgdXNlcm5hbWUsIHBhc3N3b3JkLCBraW5kOiAnZW1wbG95ZWUnIH0pXG4gICAgICAucGlwZShcbiAgICAgICAgdGFwKHVzZXJSZXN1bHQgPT4ge1xuICAgICAgICAgIHRoaXMuYWNjZXNzVG9rZW4gPSB1c2VyUmVzdWx0LmFjY2Vzc1Rva2VuO1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZWZyZXNoVG9rZW4gPSB1c2VyUmVzdWx0LnJlZnJlc2hUb2tlbjtcbiAgICAgICAgfSksXG4gICAgICAgIG1hcCh1c2VyUmVzdWx0ID0+IHtcbiAgICAgICAgICBjb25zdCBjdXJyZW50VXNlciA9IG5ldyBDdXJyZW50VXNlcih1c2VyUmVzdWx0LnVzZXJuYW1lLCB1c2VyUmVzdWx0LnVzZXJLaW5kLCB1c2VyUmVzdWx0LmRpc3BsYXlOYW1lKTtcbiAgICAgICAgICB1c2VyUmVzdWx0LnJvbGVzLmZvckVhY2gocm9sZSA9PiBjdXJyZW50VXNlci5hZGRSb2xlKHJvbGUpKTtcbiAgICAgICAgICByZXR1cm4gY3VycmVudFVzZXI7XG4gICAgICAgIH0pLFxuICAgICAgICB0YXAoY3VycmVudFVzZXIgPT4ge1xuICAgICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSBjdXJyZW50VXNlclxuICAgICAgICB9KSxcbiAgICAgICk7XG4gIH1cblxuICBwdWJsaWMgcmVmcmVzaFVzZXIoKTogT2JzZXJ2YWJsZTxPYnNlcnZhYmxlPGJvb2xlYW4+PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQ8VXNlclJlZnJlc2g+KCcvYXBpL3VzZXJzL3JlZnJlc2gnKS5waXBlKFxuICAgICAgdGFwKHVzZXJSZWZyZXNoID0+IHtcbiAgICAgICAgdGhpcy5hY2Nlc3NUb2tlbiA9IHVzZXJSZWZyZXNoLmFjY2Vzc1Rva2VuO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVmcmVzaFRva2VuID0gdXNlclJlZnJlc2gucmVmcmVzaFRva2VuO1xuICAgICAgfSksXG4gICAgICBtYXAoKCkgPT4gb2YodHJ1ZSkpLFxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgY2hhbmdlUGFzc3dvcmQodXNlcm5hbWU6IHN0cmluZywgdXNlcktpbmQ6IHN0cmluZywgb2xkUGFzc3dvcmQ6IHN0cmluZywgbmV3UGFzc3dvcmQ6IHN0cmluZyk6IE9ic2VydmFibGU8e30+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LnBvc3Q8e30+KFxuICAgICAgJy9hcGkvdXNlcnMvY2hhbmdlLXBhc3N3b3JkJyxcbiAgICAgIHtcbiAgICAgICAgdXNlcm5hbWUsIHVzZXJLaW5kLCBvbGRQYXNzd29yZCwgbmV3UGFzc3dvcmQsXG4gICAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDdXJyZW50VXNlcigpOiBDdXJyZW50VXNlciB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRVc2VyO1xuICB9XG5cbiAgcHVibGljIGdldEFjY2Vzc1Rva2VuKCk6IHN0cmluZyB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmFjY2Vzc1Rva2VuO1xuICB9XG5cbiAgcHVibGljIGdldFJlZnJlc2hUb2tlbigpOiBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLnJlZnJlc2hUb2tlbjtcbiAgfVxuXG4gIHB1YmxpYyBsb2dvdXRVc2VyKCk6IHZvaWQge1xuICAgIHRoaXMuYWNjZXNzVG9rZW4gPSBudWxsO1xuICAgIHRoaXMuY3VycmVudFVzZXIgPSBudWxsO1xuICAgIGxvY2FsU3RvcmFnZS5yZWZyZXNoVG9rZW4gPSBudWxsO1xuICB9XG59XG4iXX0=