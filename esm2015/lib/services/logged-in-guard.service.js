import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from './users.service';
import * as i0 from "@angular/core";
import * as i1 from "./users.service";
import * as i2 from "@angular/router";
export class LoggedInGuardService {
    constructor(usersSvc, router) {
        this.usersSvc = usersSvc;
        this.router = router;
    }
    canActivate(route, state) {
        if (!this.usersSvc.getCurrentUser()) {
            return this.router.parseUrl('/login');
        }
        else {
            return true;
        }
    }
}
LoggedInGuardService.ɵprov = i0.ɵɵdefineInjectable({ factory: function LoggedInGuardService_Factory() { return new LoggedInGuardService(i0.ɵɵinject(i1.UsersService), i0.ɵɵinject(i2.Router)); }, token: LoggedInGuardService, providedIn: "root" });
LoggedInGuardService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
LoggedInGuardService.ctorParameters = () => [
    { type: UsersService },
    { type: Router }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VkLWluLWd1YXJkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vcHJvamVjdHMvdXNlci1saWIvc3JjLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2xvZ2dlZC1pbi1ndWFyZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUV5QixNQUFNLEVBQ3JDLE1BQU0saUJBQWlCLENBQUM7QUFHekIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7O0FBSy9DLE1BQU0sT0FBTyxvQkFBb0I7SUFFL0IsWUFBb0IsUUFBc0IsRUFBVSxNQUFjO1FBQTlDLGFBQVEsR0FBUixRQUFRLENBQWM7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUksQ0FBQztJQUV2RSxXQUFXLENBQ1QsS0FBNkIsRUFDN0IsS0FBMEI7UUFHeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLEVBQUU7WUFDbkMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN2QzthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUM7U0FDYjtJQUVMLENBQUM7Ozs7WUFsQkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUFKUSxZQUFZO1lBSlcsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIENhbkFjdGl2YXRlLFxuICBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBVcmxUcmVlLCBSb3V0ZXJcbn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgVXNlcnNTZXJ2aWNlIH0gZnJvbSAnLi91c2Vycy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTG9nZ2VkSW5HdWFyZFNlcnZpY2UgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB1c2Vyc1N2YzogVXNlcnNTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7IH1cblxuICBjYW5BY3RpdmF0ZShcbiAgICByb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6XG4gICAgYm9vbGVhbiB8IFVybFRyZWUgfCBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPiB8IFByb21pc2U8Ym9vbGVhbiB8IFVybFRyZWU+IHtcblxuICAgICAgaWYgKCF0aGlzLnVzZXJzU3ZjLmdldEN1cnJlbnRVc2VyKCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm91dGVyLnBhcnNlVXJsKCcvbG9naW4nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gIH1cbn1cbiJdfQ==