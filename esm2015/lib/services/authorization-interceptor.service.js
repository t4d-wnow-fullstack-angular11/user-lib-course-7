import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { UsersService } from './users.service';
import * as i0 from "@angular/core";
import * as i1 from "./users.service";
export class AuthorizationInterceptorService {
    constructor(usersSvc) {
        this.usersSvc = usersSvc;
    }
    withAccessToken(req) {
        return req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + this.usersSvc.getAccessToken()),
        });
    }
    withRefreshToken(req) {
        return req.clone({
            method: 'GET',
            headers: req.headers.set('Authorization', 'Bearer ' + this.usersSvc.getRefreshToken()),
        });
    }
    intercept(req, next) {
        if (req.url.endsWith('/api/users/login')) {
            return next.handle(req);
        }
        if (req.url.endsWith('/api/users/refresh')) {
            return next.handle(this.withRefreshToken(req));
        }
        return next.handle(this.withAccessToken(req)).pipe(catchError((err, caught) => {
            if (err instanceof HttpErrorResponse) {
                if (err.status === 401) {
                    return this.usersSvc.refreshUser()
                        .pipe(switchMap(() => next.handle(this.withAccessToken(req))));
                }
                else {
                    return throwError(err);
                }
            }
            return caught;
        }));
    }
}
AuthorizationInterceptorService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AuthorizationInterceptorService_Factory() { return new AuthorizationInterceptorService(i0.ɵɵinject(i1.UsersService)); }, token: AuthorizationInterceptorService, providedIn: "root" });
AuthorizationInterceptorService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
AuthorizationInterceptorService.ctorParameters = () => [
    { type: UsersService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yaXphdGlvbi1pbnRlcmNlcHRvci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL3VzZXItbGliL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hdXRob3JpemF0aW9uLWludGVyY2VwdG9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQXdELGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0csT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXZELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBSy9DLE1BQU0sT0FBTywrQkFBK0I7SUFFMUMsWUFBb0IsUUFBc0I7UUFBdEIsYUFBUSxHQUFSLFFBQVEsQ0FBYztJQUFJLENBQUM7SUFFL0MsZUFBZSxDQUFDLEdBQXFCO1FBQ25DLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQztZQUNmLE9BQU8sRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FDdEIsZUFBZSxFQUNmLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUMzQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxHQUFxQjtRQUNwQyxPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDZixNQUFNLEVBQUUsS0FBSztZQUNiLE9BQU8sRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FDdEIsZUFBZSxFQUNmLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxDQUM1QztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxTQUFTLENBQUMsR0FBcUIsRUFBRSxJQUFpQjtRQUVoRCxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLEVBQUU7WUFDeEMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3pCO1FBRUQsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFO1lBQzFDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNoRDtRQUVELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUNoRCxVQUFVLENBQUMsQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDekIsSUFBSSxHQUFHLFlBQVksaUJBQWlCLEVBQUU7Z0JBQ3BDLElBQUksR0FBRyxDQUFDLE1BQU0sS0FBSyxHQUFHLEVBQUU7b0JBQ3RCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUU7eUJBQy9CLElBQUksQ0FDSCxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FDeEQsQ0FBQztpQkFDTDtxQkFBTTtvQkFDTCxPQUFPLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDeEI7YUFDRjtZQUNELE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUNILENBQUM7SUFFSixDQUFDOzs7O1lBcERGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBSlEsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBFdmVudCwgSHR0cEhhbmRsZXIsIEh0dHBJbnRlcmNlcHRvciwgSHR0cFJlcXVlc3QsIEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBVc2Vyc1NlcnZpY2UgfSBmcm9tICcuL3VzZXJzLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBBdXRob3JpemF0aW9uSW50ZXJjZXB0b3JTZXJ2aWNlIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVzZXJzU3ZjOiBVc2Vyc1NlcnZpY2UpIHsgfVxuXG4gIHdpdGhBY2Nlc3NUb2tlbihyZXE6IEh0dHBSZXF1ZXN0PGFueT4pOiBIdHRwUmVxdWVzdDxhbnk+IHtcbiAgICByZXR1cm4gcmVxLmNsb25lKHtcbiAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzLnNldChcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nLFxuICAgICAgICAnQmVhcmVyICcgKyB0aGlzLnVzZXJzU3ZjLmdldEFjY2Vzc1Rva2VuKCksXG4gICAgICApLFxuICAgIH0pO1xuICB9XG5cbiAgd2l0aFJlZnJlc2hUb2tlbihyZXE6IEh0dHBSZXF1ZXN0PGFueT4pOiBIdHRwUmVxdWVzdDxhbnk+IHtcbiAgICByZXR1cm4gcmVxLmNsb25lKHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBoZWFkZXJzOiByZXEuaGVhZGVycy5zZXQoXG4gICAgICAgICdBdXRob3JpemF0aW9uJyxcbiAgICAgICAgJ0JlYXJlciAnICsgdGhpcy51c2Vyc1N2Yy5nZXRSZWZyZXNoVG9rZW4oKSxcbiAgICAgICksXG4gICAgfSk7XG4gIH1cblxuICBpbnRlcmNlcHQocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcblxuICAgIGlmIChyZXEudXJsLmVuZHNXaXRoKCcvYXBpL3VzZXJzL2xvZ2luJykpIHtcbiAgICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXEpO1xuICAgIH1cblxuICAgIGlmIChyZXEudXJsLmVuZHNXaXRoKCcvYXBpL3VzZXJzL3JlZnJlc2gnKSkge1xuICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHRoaXMud2l0aFJlZnJlc2hUb2tlbihyZXEpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dC5oYW5kbGUodGhpcy53aXRoQWNjZXNzVG9rZW4ocmVxKSkucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKGVyciwgY2F1Z2h0KSA9PiB7XG4gICAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBIdHRwRXJyb3JSZXNwb25zZSkge1xuICAgICAgICAgIGlmIChlcnIuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVzZXJzU3ZjLnJlZnJlc2hVc2VyKClcbiAgICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgc3dpdGNoTWFwKCgpID0+IG5leHQuaGFuZGxlKHRoaXMud2l0aEFjY2Vzc1Rva2VuKHJlcSkpKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2F1Z2h0O1xuICAgICAgfSlcbiAgICApO1xuXG4gIH1cbn1cbiJdfQ==