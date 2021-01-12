import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersService } from '../services/users.service';
import * as i0 from "@angular/core";
import * as i1 from "./users.service";
import * as i2 from "@angular/material/snack-bar";
export class AllowedRolesGuardService {
    constructor(usersSvc, snackBar) {
        this.usersSvc = usersSvc;
        this.snackBar = snackBar;
    }
    canActivate(route, state) {
        var _a;
        if (!((_a = this.usersSvc.getCurrentUser()) === null || _a === void 0 ? void 0 : _a.hasRole(route.data.roles))) {
            const snackBarRef = this.snackBar.open(`You are not allowed to navigate to the ${route.data.title}.`, 'Dismiss');
            snackBarRef.onAction().subscribe(() => {
                snackBarRef.dismiss();
            });
            return false;
        }
        else {
            return true;
        }
    }
}
AllowedRolesGuardService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AllowedRolesGuardService_Factory() { return new AllowedRolesGuardService(i0.ɵɵinject(i1.UsersService), i0.ɵɵinject(i2.MatSnackBar)); }, token: AllowedRolesGuardService, providedIn: "root" });
AllowedRolesGuardService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
AllowedRolesGuardService.ctorParameters = () => [
    { type: UsersService },
    { type: MatSnackBar }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxsb3dlZC1yb2xlcy1ndWFyZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL3VzZXItbGliL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hbGxvd2VkLXJvbGVzLWd1YXJkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7O0FBS3pELE1BQU0sT0FBTyx3QkFBd0I7SUFFbkMsWUFBb0IsUUFBc0IsRUFBVSxRQUFxQjtRQUFyRCxhQUFRLEdBQVIsUUFBUSxDQUFjO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBYTtJQUFJLENBQUM7SUFFOUUsV0FBVyxDQUNULEtBQTZCLEVBQzdCLEtBQTBCOztRQUcxQixJQUFJLFFBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsMENBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFDLEVBQUU7WUFDOUQsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BDLDBDQUEwQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUM3RCxTQUFTLENBQUMsQ0FBQztZQUNiLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO2dCQUNwQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDeEIsQ0FBQyxDQUFDLENBQUM7WUFDSCxPQUFPLEtBQUssQ0FBQztTQUNkO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQztTQUNiO0lBQ0gsQ0FBQzs7OztZQXZCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQUpRLFlBQVk7WUFGWixXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgQ2FuQWN0aXZhdGUsIFJvdXRlclN0YXRlU25hcHNob3QsIFVybFRyZWUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXInO1xuXG5pbXBvcnQgeyBVc2Vyc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy91c2Vycy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQWxsb3dlZFJvbGVzR3VhcmRTZXJ2aWNlIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdXNlcnNTdmM6IFVzZXJzU2VydmljZSwgcHJpdmF0ZSBzbmFja0JhcjogTWF0U25hY2tCYXIpIHsgfVxuXG4gIGNhbkFjdGl2YXRlKFxuICAgIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICAgIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KVxuICAgIDogYm9vbGVhbiB8IFVybFRyZWUgfCBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPiB8IFByb21pc2U8Ym9vbGVhbiB8IFVybFRyZWU+IHtcblxuICAgIGlmICghdGhpcy51c2Vyc1N2Yy5nZXRDdXJyZW50VXNlcigpPy5oYXNSb2xlKHJvdXRlLmRhdGEucm9sZXMpKSB7XG4gICAgICBjb25zdCBzbmFja0JhclJlZiA9IHRoaXMuc25hY2tCYXIub3BlbihcbiAgICAgICAgYFlvdSBhcmUgbm90IGFsbG93ZWQgdG8gbmF2aWdhdGUgdG8gdGhlICR7cm91dGUuZGF0YS50aXRsZX0uYCxcbiAgICAgICAgJ0Rpc21pc3MnKTtcbiAgICAgIHNuYWNrQmFyUmVmLm9uQWN0aW9uKCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgc25hY2tCYXJSZWYuZGlzbWlzcygpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxufVxuIl19