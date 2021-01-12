import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
export class CurrentUserComponent {
    constructor(router, usersSvc) {
        this.router = router;
        this.usersSvc = usersSvc;
    }
    get loggedIn() {
        return !!this.usersSvc.getCurrentUser();
    }
    get displayName() {
        var _a, _b;
        return (_b = (_a = this.usersSvc.getCurrentUser()) === null || _a === void 0 ? void 0 : _a.displayName) !== null && _b !== void 0 ? _b : '';
    }
    get username() {
        var _a, _b;
        return (_b = (_a = this.usersSvc.getCurrentUser()) === null || _a === void 0 ? void 0 : _a.username) !== null && _b !== void 0 ? _b : '';
    }
    ngOnInit() {
    }
    navigateToProfile() {
        return this.router.navigateByUrl('/profile');
    }
    navigateToLogout() {
        return this.router.navigateByUrl('/logout');
    }
    navigateToLogin() {
        return this.router.navigateByUrl('/login');
    }
}
CurrentUserComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-current-user',
                template: "<div *ngIf=\"loggedIn\">\n  <button mat-button [matMenuTriggerFor]=\"menu\">\n    <mat-icon aria-hidden=\"false\" aria-label=\"User Account\">account_circle</mat-icon>\n    <span>{{displayName}} ({{username}})</span>\n  </button>\n  <mat-menu #menu=\"matMenu\">\n    <button mat-menu-item (click)=\"navigateToProfile()\">Profile</button>\n    <button mat-menu-item (click)=\"navigateToLogout()\">Logout</button>\n  </mat-menu>\n</div>\n<div *ngIf=\"!loggedIn\">\n  <button mat-button (click)=\"navigateToLogin()\">\n    <mat-icon aria-hidden=\"false\" aria-label=\"User Account\">account_circle</mat-icon>\n    <span>Login</span>\n  </button>\n</div>",
                styles: ["mat-icon{margin-right:4px}"]
            },] }
];
CurrentUserComponent.ctorParameters = () => [
    { type: Router },
    { type: UsersService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVudC11c2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi9wcm9qZWN0cy91c2VyLWxpYi9zcmMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jdXJyZW50LXVzZXIvY3VycmVudC11c2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFPNUQsTUFBTSxPQUFPLG9CQUFvQjtJQWMvQixZQUFvQixNQUFjLEVBQVUsUUFBc0I7UUFBOUMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQWM7SUFBSSxDQUFDO0lBWnZFLElBQUksUUFBUTtRQUNWLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVELElBQUksV0FBVzs7UUFDYixtQkFBTyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSwwQ0FBRSxXQUFXLG1DQUFJLEVBQUUsQ0FBQztJQUMzRCxDQUFDO0lBRUQsSUFBSSxRQUFROztRQUNWLG1CQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLDBDQUFFLFFBQVEsbUNBQUksRUFBRSxDQUFDO0lBQ3hELENBQUM7SUFJRCxRQUFRO0lBQ1IsQ0FBQztJQUVNLGlCQUFpQjtRQUN0QixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFTSxnQkFBZ0I7UUFDckIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRU0sZUFBZTtRQUNwQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdDLENBQUM7OztZQWxDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsc3BCQUE0Qzs7YUFFN0M7OztZQVJRLE1BQU07WUFFTixZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFVzZXJzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VzZXJzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtY3VycmVudC11c2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2N1cnJlbnQtdXNlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2N1cnJlbnQtdXNlci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ3VycmVudFVzZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGdldCBsb2dnZWRJbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLnVzZXJzU3ZjLmdldEN1cnJlbnRVc2VyKCk7XG4gIH1cblxuICBnZXQgZGlzcGxheU5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy51c2Vyc1N2Yy5nZXRDdXJyZW50VXNlcigpPy5kaXNwbGF5TmFtZSA/PyAnJztcbiAgfVxuXG4gIGdldCB1c2VybmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnVzZXJzU3ZjLmdldEN1cnJlbnRVc2VyKCk/LnVzZXJuYW1lID8/ICcnO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSB1c2Vyc1N2YzogVXNlcnNTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIHB1YmxpYyBuYXZpZ2F0ZVRvUHJvZmlsZSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnL3Byb2ZpbGUnKTtcbiAgfVxuXG4gIHB1YmxpYyBuYXZpZ2F0ZVRvTG9nb3V0KCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvbG9nb3V0Jyk7XG4gIH1cblxuICBwdWJsaWMgbmF2aWdhdGVUb0xvZ2luKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvbG9naW4nKTtcbiAgfVxuXG59XG4iXX0=