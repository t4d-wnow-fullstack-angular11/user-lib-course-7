import { CommonModule } from '@angular/common';
import { EventEmitter, Component, Output, ɵɵdefineInjectable, ɵɵinject, Injectable, Input, NgModule } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { confirmValue } from '@t4d-wnow/shared-lib';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { tap, map, catchError, switchMap } from 'rxjs/operators';
import { intersection } from 'lodash-es';

class ChangePasswordFormComponent {
    constructor(fb) {
        this.fb = fb;
        this.changePassword = new EventEmitter();
    }
    ngOnInit() {
        this.changePasswordForm = this.fb.group({
            currentPassword: '',
            newPassword: '',
            confirmPassword: '',
        }, { validators: [confirmValue('newPassword', 'confirmPassword')] });
    }
    doChangePassword() {
        if (this.changePasswordForm.valid) {
            this.changePassword.emit(this.changePasswordForm.value);
        }
    }
}
ChangePasswordFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-change-password-form',
                template: "<form class=\"change-password-form\" [formGroup]=\"changePasswordForm\">\n\n  <div class=\"mat-error error\" *ngIf=\"changePasswordForm?.errors?.confirmValue\">\n    <mat-icon aria-hidden=\"false\" aria-label=\"Error\">error</mat-icon>\n    The new password and the confirm password do not match.\n  </div>\n\n  <div class=\"form-field\">\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Current Password</mat-label>\n      <input matInput type=\"password\" formControlName=\"currentPassword\">\n    </mat-form-field>\n  </div>\n\n  <div class=\"form-field\">\n    <mat-form-field appearance=\"outline\">\n      <mat-label>New Password</mat-label>\n      <input matInput type=\"password\" formControlName=\"newPassword\">\n    </mat-form-field>\n  </div>\n\n  <div class=\"form-field\">\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Confirm Password</mat-label>\n      <input matInput type=\"password\" formControlName=\"confirmPassword\">\n    </mat-form-field>\n  </div>\n\n  <div class=\"buttons\">\n    <button type=\"button\" (click)=\"doChangePassword()\" mat-raised-button color=\"primary\">\n      Change Password\n    </button>\n  </div>\n\n\n</form>",
                styles: [".error{padding:10px;text-align:center}.error mat-icon{vertical-align:middle}.buttons,.form-field{text-align:center}.buttons>button{margin:4px}"]
            },] }
];
ChangePasswordFormComponent.ctorParameters = () => [
    { type: FormBuilder }
];
ChangePasswordFormComponent.propDecorators = {
    changePassword: [{ type: Output }]
};

class CurrentUser {
    constructor(username, userKind, displayName) {
        this.username = username;
        this.userKind = userKind;
        this.displayName = displayName;
        this.roles = [];
    }
    addRole(roleName) {
        if (!roleName)
            throw new Error('role name cannot be empty');
        this.roles.push(roleName);
        return this;
    }
    hasRole(roleNames) {
        return intersection(this.roles, roleNames).length > 0;
    }
}

class UsersService {
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
UsersService.ɵprov = ɵɵdefineInjectable({ factory: function UsersService_Factory() { return new UsersService(ɵɵinject(HttpClient)); }, token: UsersService, providedIn: "root" });
UsersService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
UsersService.ctorParameters = () => [
    { type: HttpClient }
];

class CurrentUserComponent {
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

class LoginFormComponent {
    constructor(fb) {
        this.fb = fb;
        this.loginFormSubmitted = false;
        this.login = new EventEmitter();
        this.clear = new EventEmitter();
    }
    get showLoginFormValidationSummary() {
        return this.loginForm.invalid && this.loginFormSubmitted;
    }
    get showUsernameError() {
        const usernameFormControl = this.loginForm.get('username');
        return usernameFormControl.invalid;
    }
    get showPasswordError() {
        const passwordFormControl = this.loginForm.get('password');
        return passwordFormControl.invalid;
    }
    // username: 'adodsworth'
    // password: 'testpass'
    ngOnInit() {
        this.loginForm = this.fb.group({
            username: ['adodsworth', { validators: [Validators.required] }],
            password: ['testpass', { validators: [Validators.required] }],
        });
    }
    doLogin() {
        this.loginFormSubmitted = true;
        if (this.loginForm.invalid)
            return;
        this.login.emit(this.loginForm.value);
    }
    doClear() {
        this.loginForm.reset();
        this.clear.emit();
    }
}
LoginFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-login-form',
                template: "<mat-card class=\"validation-summary-card\" *ngIf=\"showLoginFormValidationSummary\">\n  <mat-card-header class=\"validation-summary-header\">\n    <mat-card-title class=\"validation-summary-title\">\n      Errors\n    </mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <mat-list role=\"list\" dense>\n      <mat-list-item role=\"listitem\" *ngIf=\"showUsernameError\">\n        <mat-icon mat-list-icon>arrow_right</mat-icon>\n        Username is required.\n      </mat-list-item>\n      <mat-list-item role=\"listitem\" *ngIf=\"showPasswordError\">\n        <mat-icon mat-list-icon>arrow_right</mat-icon>\n        Password is required.\n      </mat-list-item>\n    </mat-list>\n  </mat-card-content>\n</mat-card>\n\n\n<form class=\"login-form\" [formGroup]=\"loginForm\" (submit)=\"doLogin()\">\n\n  <div class=\"form-field\">\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Username</mat-label>\n      <input matInput formControlName=\"username\" />\n      <mat-error *ngIf=\"showUsernameError\">Username is required</mat-error>\n    </mat-form-field>\n  </div>\n\n  <div class=\"form-field\">\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Password</mat-label>\n      <input matInput formControlName=\"password\" />\n      <mat-error *ngIf=\"showPasswordError\">Password is required</mat-error>\n    </mat-form-field>\n  </div>\n\n  <div class=\"buttons\">\n    <button type=\"submit\" mat-raised-button color=\"primary\">Login</button>\n    <button type=\"reset\" mat-raised-button (click)=\"doClear()\">Clear</button>\n  </div>\n\n</form>",
                styles: [".buttons,.form-field{padding:6px 0;text-align:center}.buttons>button{margin:4px}.validation-summary-card{margin:0 auto 20px;max-width:400px;padding:0}.validation-summary-header{background-color:#3f51b5;color:#fff}.validation-summary-title{font-size:1.1rem;margin:0;padding:12px}.mat-card-content{padding:8px 0}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar{height:32px}.mat-list-base[dense] .mat-list-item{font-size:.9rem}"]
            },] }
];
LoginFormComponent.ctorParameters = () => [
    { type: FormBuilder }
];
LoginFormComponent.propDecorators = {
    login: [{ type: Output }],
    clear: [{ type: Output }]
};

class UserProfileComponent {
    constructor() {
        this.userProfile = null;
    }
    ngOnInit() {
    }
}
UserProfileComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-user-profile',
                template: "<div>\n  <div>Username: {{userProfile?.username}}</div>\n  <div>Display Name: {{userProfile?.displayName}}</div>\n  <div>Roles: {{userProfile?.roles?.join(', ')}}</div>\n</div>",
                styles: [""]
            },] }
];
UserProfileComponent.ctorParameters = () => [];
UserProfileComponent.propDecorators = {
    userProfile: [{ type: Input }]
};

class UserLibModule {
}
UserLibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    ChangePasswordFormComponent,
                    CurrentUserComponent,
                    LoginFormComponent,
                    UserProfileComponent,
                ],
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    HttpClientModule,
                    MatListModule,
                    MatToolbarModule,
                    MatSidenavModule,
                    MatButtonModule,
                    MatIconModule,
                    MatCardModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatMenuModule,
                    MatTableModule,
                    MatSnackBarModule,
                ],
                exports: [
                    ChangePasswordFormComponent,
                    CurrentUserComponent,
                    LoginFormComponent,
                    UserProfileComponent,
                ],
            },] }
];

class AllowedRolesGuardService {
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
AllowedRolesGuardService.ɵprov = ɵɵdefineInjectable({ factory: function AllowedRolesGuardService_Factory() { return new AllowedRolesGuardService(ɵɵinject(UsersService), ɵɵinject(MatSnackBar)); }, token: AllowedRolesGuardService, providedIn: "root" });
AllowedRolesGuardService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
AllowedRolesGuardService.ctorParameters = () => [
    { type: UsersService },
    { type: MatSnackBar }
];

class AuthorizationInterceptorService {
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
AuthorizationInterceptorService.ɵprov = ɵɵdefineInjectable({ factory: function AuthorizationInterceptorService_Factory() { return new AuthorizationInterceptorService(ɵɵinject(UsersService)); }, token: AuthorizationInterceptorService, providedIn: "root" });
AuthorizationInterceptorService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
AuthorizationInterceptorService.ctorParameters = () => [
    { type: UsersService }
];

class LoggedInGuardService {
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
LoggedInGuardService.ɵprov = ɵɵdefineInjectable({ factory: function LoggedInGuardService_Factory() { return new LoggedInGuardService(ɵɵinject(UsersService), ɵɵinject(Router)); }, token: LoggedInGuardService, providedIn: "root" });
LoggedInGuardService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
LoggedInGuardService.ctorParameters = () => [
    { type: UsersService },
    { type: Router }
];

/*
 * Public API Surface of user-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AllowedRolesGuardService, AuthorizationInterceptorService, ChangePasswordFormComponent, CurrentUser, CurrentUserComponent, LoggedInGuardService, LoginFormComponent, UserLibModule, UserProfileComponent, UsersService };
//# sourceMappingURL=t4d-wnow-user-lib.js.map
