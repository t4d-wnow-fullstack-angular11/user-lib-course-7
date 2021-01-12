(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('@angular/common/http'), require('@angular/material/list'), require('@angular/material/toolbar'), require('@angular/material/sidenav'), require('@angular/material/icon'), require('@angular/material/card'), require('@angular/material/button'), require('@angular/material/form-field'), require('@angular/material/input'), require('@angular/material/menu'), require('@angular/material/table'), require('@angular/material/snack-bar'), require('@t4d-wnow/shared-lib'), require('@angular/router'), require('rxjs'), require('rxjs/operators'), require('lodash-es')) :
    typeof define === 'function' && define.amd ? define('@t4d-wnow/user-lib', ['exports', '@angular/common', '@angular/core', '@angular/forms', '@angular/common/http', '@angular/material/list', '@angular/material/toolbar', '@angular/material/sidenav', '@angular/material/icon', '@angular/material/card', '@angular/material/button', '@angular/material/form-field', '@angular/material/input', '@angular/material/menu', '@angular/material/table', '@angular/material/snack-bar', '@t4d-wnow/shared-lib', '@angular/router', 'rxjs', 'rxjs/operators', 'lodash-es'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['t4d-wnow'] = global['t4d-wnow'] || {}, global['t4d-wnow']['user-lib'] = {}), global.ng.common, global.ng.core, global.ng.forms, global.ng.common.http, global.ng.material.list, global.ng.material.toolbar, global.ng.material.sidenav, global.ng.material.icon, global.ng.material.card, global.ng.material.button, global.ng.material.formField, global.ng.material.input, global.ng.material.menu, global.ng.material.table, global.ng.material.snackBar, global['t4d-wnow-shared-lib'], global.ng.router, global.rxjs, global.rxjs.operators, global['lodash-es']));
}(this, (function (exports, common, i0, forms, i1, list, toolbar, sidenav, icon, card, button, formField, input, menu, table, i2$1, sharedLib, i2, rxjs, operators, lodashEs) { 'use strict';

    var ChangePasswordFormComponent = /** @class */ (function () {
        function ChangePasswordFormComponent(fb) {
            this.fb = fb;
            this.changePassword = new i0.EventEmitter();
        }
        ChangePasswordFormComponent.prototype.ngOnInit = function () {
            this.changePasswordForm = this.fb.group({
                currentPassword: '',
                newPassword: '',
                confirmPassword: '',
            }, { validators: [sharedLib.confirmValue('newPassword', 'confirmPassword')] });
        };
        ChangePasswordFormComponent.prototype.doChangePassword = function () {
            if (this.changePasswordForm.valid) {
                this.changePassword.emit(this.changePasswordForm.value);
            }
        };
        return ChangePasswordFormComponent;
    }());
    ChangePasswordFormComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'app-change-password-form',
                    template: "<form class=\"change-password-form\" [formGroup]=\"changePasswordForm\">\n\n  <div class=\"mat-error error\" *ngIf=\"changePasswordForm?.errors?.confirmValue\">\n    <mat-icon aria-hidden=\"false\" aria-label=\"Error\">error</mat-icon>\n    The new password and the confirm password do not match.\n  </div>\n\n  <div class=\"form-field\">\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Current Password</mat-label>\n      <input matInput type=\"password\" formControlName=\"currentPassword\">\n    </mat-form-field>\n  </div>\n\n  <div class=\"form-field\">\n    <mat-form-field appearance=\"outline\">\n      <mat-label>New Password</mat-label>\n      <input matInput type=\"password\" formControlName=\"newPassword\">\n    </mat-form-field>\n  </div>\n\n  <div class=\"form-field\">\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Confirm Password</mat-label>\n      <input matInput type=\"password\" formControlName=\"confirmPassword\">\n    </mat-form-field>\n  </div>\n\n  <div class=\"buttons\">\n    <button type=\"button\" (click)=\"doChangePassword()\" mat-raised-button color=\"primary\">\n      Change Password\n    </button>\n  </div>\n\n\n</form>",
                    styles: [".error{padding:10px;text-align:center}.error mat-icon{vertical-align:middle}.buttons,.form-field{text-align:center}.buttons>button{margin:4px}"]
                },] }
    ];
    ChangePasswordFormComponent.ctorParameters = function () { return [
        { type: forms.FormBuilder }
    ]; };
    ChangePasswordFormComponent.propDecorators = {
        changePassword: [{ type: i0.Output }]
    };

    var CurrentUser = /** @class */ (function () {
        function CurrentUser(username, userKind, displayName) {
            this.username = username;
            this.userKind = userKind;
            this.displayName = displayName;
            this.roles = [];
        }
        CurrentUser.prototype.addRole = function (roleName) {
            if (!roleName)
                throw new Error('role name cannot be empty');
            this.roles.push(roleName);
            return this;
        };
        CurrentUser.prototype.hasRole = function (roleNames) {
            return lodashEs.intersection(this.roles, roleNames).length > 0;
        };
        return CurrentUser;
    }());

    var UsersService = /** @class */ (function () {
        function UsersService(httpClient) {
            this.httpClient = httpClient;
            this.accessToken = null;
            this.currentUser = null;
        }
        UsersService.prototype.loginEmployee = function (username, password) {
            var _this = this;
            return this.httpClient
                .post('/api/users/login', { username: username, password: password, kind: 'employee' })
                .pipe(operators.tap(function (userResult) {
                _this.accessToken = userResult.accessToken;
                localStorage.refreshToken = userResult.refreshToken;
            }), operators.map(function (userResult) {
                var currentUser = new CurrentUser(userResult.username, userResult.userKind, userResult.displayName);
                userResult.roles.forEach(function (role) { return currentUser.addRole(role); });
                return currentUser;
            }), operators.tap(function (currentUser) {
                _this.currentUser = currentUser;
            }));
        };
        UsersService.prototype.refreshUser = function () {
            var _this = this;
            return this.httpClient.get('/api/users/refresh').pipe(operators.tap(function (userRefresh) {
                _this.accessToken = userRefresh.accessToken;
                localStorage.refreshToken = userRefresh.refreshToken;
            }), operators.map(function () { return rxjs.of(true); }));
        };
        UsersService.prototype.changePassword = function (username, userKind, oldPassword, newPassword) {
            return this.httpClient.post('/api/users/change-password', {
                username: username, userKind: userKind, oldPassword: oldPassword, newPassword: newPassword,
            });
        };
        UsersService.prototype.getCurrentUser = function () {
            return this.currentUser;
        };
        UsersService.prototype.getAccessToken = function () {
            return this.accessToken;
        };
        UsersService.prototype.getRefreshToken = function () {
            return localStorage.refreshToken;
        };
        UsersService.prototype.logoutUser = function () {
            this.accessToken = null;
            this.currentUser = null;
            localStorage.refreshToken = null;
        };
        return UsersService;
    }());
    UsersService.ɵprov = i0.ɵɵdefineInjectable({ factory: function UsersService_Factory() { return new UsersService(i0.ɵɵinject(i1.HttpClient)); }, token: UsersService, providedIn: "root" });
    UsersService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    UsersService.ctorParameters = function () { return [
        { type: i1.HttpClient }
    ]; };

    var CurrentUserComponent = /** @class */ (function () {
        function CurrentUserComponent(router, usersSvc) {
            this.router = router;
            this.usersSvc = usersSvc;
        }
        Object.defineProperty(CurrentUserComponent.prototype, "loggedIn", {
            get: function () {
                return !!this.usersSvc.getCurrentUser();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CurrentUserComponent.prototype, "displayName", {
            get: function () {
                var _a, _b;
                return (_b = (_a = this.usersSvc.getCurrentUser()) === null || _a === void 0 ? void 0 : _a.displayName) !== null && _b !== void 0 ? _b : '';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CurrentUserComponent.prototype, "username", {
            get: function () {
                var _a, _b;
                return (_b = (_a = this.usersSvc.getCurrentUser()) === null || _a === void 0 ? void 0 : _a.username) !== null && _b !== void 0 ? _b : '';
            },
            enumerable: false,
            configurable: true
        });
        CurrentUserComponent.prototype.ngOnInit = function () {
        };
        CurrentUserComponent.prototype.navigateToProfile = function () {
            return this.router.navigateByUrl('/profile');
        };
        CurrentUserComponent.prototype.navigateToLogout = function () {
            return this.router.navigateByUrl('/logout');
        };
        CurrentUserComponent.prototype.navigateToLogin = function () {
            return this.router.navigateByUrl('/login');
        };
        return CurrentUserComponent;
    }());
    CurrentUserComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'app-current-user',
                    template: "<div *ngIf=\"loggedIn\">\n  <button mat-button [matMenuTriggerFor]=\"menu\">\n    <mat-icon aria-hidden=\"false\" aria-label=\"User Account\">account_circle</mat-icon>\n    <span>{{displayName}} ({{username}})</span>\n  </button>\n  <mat-menu #menu=\"matMenu\">\n    <button mat-menu-item (click)=\"navigateToProfile()\">Profile</button>\n    <button mat-menu-item (click)=\"navigateToLogout()\">Logout</button>\n  </mat-menu>\n</div>\n<div *ngIf=\"!loggedIn\">\n  <button mat-button (click)=\"navigateToLogin()\">\n    <mat-icon aria-hidden=\"false\" aria-label=\"User Account\">account_circle</mat-icon>\n    <span>Login</span>\n  </button>\n</div>",
                    styles: ["mat-icon{margin-right:4px}"]
                },] }
    ];
    CurrentUserComponent.ctorParameters = function () { return [
        { type: i2.Router },
        { type: UsersService }
    ]; };

    var LoginFormComponent = /** @class */ (function () {
        function LoginFormComponent(fb) {
            this.fb = fb;
            this.loginFormSubmitted = false;
            this.login = new i0.EventEmitter();
            this.clear = new i0.EventEmitter();
        }
        Object.defineProperty(LoginFormComponent.prototype, "showLoginFormValidationSummary", {
            get: function () {
                return this.loginForm.invalid && this.loginFormSubmitted;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LoginFormComponent.prototype, "showUsernameError", {
            get: function () {
                var usernameFormControl = this.loginForm.get('username');
                return usernameFormControl.invalid;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LoginFormComponent.prototype, "showPasswordError", {
            get: function () {
                var passwordFormControl = this.loginForm.get('password');
                return passwordFormControl.invalid;
            },
            enumerable: false,
            configurable: true
        });
        // username: 'adodsworth'
        // password: 'testpass'
        LoginFormComponent.prototype.ngOnInit = function () {
            this.loginForm = this.fb.group({
                username: ['adodsworth', { validators: [forms.Validators.required] }],
                password: ['testpass', { validators: [forms.Validators.required] }],
            });
        };
        LoginFormComponent.prototype.doLogin = function () {
            this.loginFormSubmitted = true;
            if (this.loginForm.invalid)
                return;
            this.login.emit(this.loginForm.value);
        };
        LoginFormComponent.prototype.doClear = function () {
            this.loginForm.reset();
            this.clear.emit();
        };
        return LoginFormComponent;
    }());
    LoginFormComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'app-login-form',
                    template: "<mat-card class=\"validation-summary-card\" *ngIf=\"showLoginFormValidationSummary\">\n  <mat-card-header class=\"validation-summary-header\">\n    <mat-card-title class=\"validation-summary-title\">\n      Errors\n    </mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <mat-list role=\"list\" dense>\n      <mat-list-item role=\"listitem\" *ngIf=\"showUsernameError\">\n        <mat-icon mat-list-icon>arrow_right</mat-icon>\n        Username is required.\n      </mat-list-item>\n      <mat-list-item role=\"listitem\" *ngIf=\"showPasswordError\">\n        <mat-icon mat-list-icon>arrow_right</mat-icon>\n        Password is required.\n      </mat-list-item>\n    </mat-list>\n  </mat-card-content>\n</mat-card>\n\n\n<form class=\"login-form\" [formGroup]=\"loginForm\" (submit)=\"doLogin()\">\n\n  <div class=\"form-field\">\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Username</mat-label>\n      <input matInput formControlName=\"username\" />\n      <mat-error *ngIf=\"showUsernameError\">Username is required</mat-error>\n    </mat-form-field>\n  </div>\n\n  <div class=\"form-field\">\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Password</mat-label>\n      <input matInput formControlName=\"password\" />\n      <mat-error *ngIf=\"showPasswordError\">Password is required</mat-error>\n    </mat-form-field>\n  </div>\n\n  <div class=\"buttons\">\n    <button type=\"submit\" mat-raised-button color=\"primary\">Login</button>\n    <button type=\"reset\" mat-raised-button (click)=\"doClear()\">Clear</button>\n  </div>\n\n</form>",
                    styles: [".buttons,.form-field{padding:6px 0;text-align:center}.buttons>button{margin:4px}.validation-summary-card{margin:0 auto 20px;max-width:400px;padding:0}.validation-summary-header{background-color:#3f51b5;color:#fff}.validation-summary-title{font-size:1.1rem;margin:0;padding:12px}.mat-card-content{padding:8px 0}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar{height:32px}.mat-list-base[dense] .mat-list-item{font-size:.9rem}"]
                },] }
    ];
    LoginFormComponent.ctorParameters = function () { return [
        { type: forms.FormBuilder }
    ]; };
    LoginFormComponent.propDecorators = {
        login: [{ type: i0.Output }],
        clear: [{ type: i0.Output }]
    };

    var UserProfileComponent = /** @class */ (function () {
        function UserProfileComponent() {
            this.userProfile = null;
        }
        UserProfileComponent.prototype.ngOnInit = function () {
        };
        return UserProfileComponent;
    }());
    UserProfileComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'app-user-profile',
                    template: "<div>\n  <div>Username: {{userProfile?.username}}</div>\n  <div>Display Name: {{userProfile?.displayName}}</div>\n  <div>Roles: {{userProfile?.roles?.join(', ')}}</div>\n</div>",
                    styles: [""]
                },] }
    ];
    UserProfileComponent.ctorParameters = function () { return []; };
    UserProfileComponent.propDecorators = {
        userProfile: [{ type: i0.Input }]
    };

    var UserLibModule = /** @class */ (function () {
        function UserLibModule() {
        }
        return UserLibModule;
    }());
    UserLibModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [
                        ChangePasswordFormComponent,
                        CurrentUserComponent,
                        LoginFormComponent,
                        UserProfileComponent,
                    ],
                    imports: [
                        common.CommonModule,
                        forms.ReactiveFormsModule,
                        i1.HttpClientModule,
                        list.MatListModule,
                        toolbar.MatToolbarModule,
                        sidenav.MatSidenavModule,
                        button.MatButtonModule,
                        icon.MatIconModule,
                        card.MatCardModule,
                        formField.MatFormFieldModule,
                        input.MatInputModule,
                        menu.MatMenuModule,
                        table.MatTableModule,
                        i2$1.MatSnackBarModule,
                    ],
                    exports: [
                        ChangePasswordFormComponent,
                        CurrentUserComponent,
                        LoginFormComponent,
                        UserProfileComponent,
                    ],
                },] }
    ];

    var AllowedRolesGuardService = /** @class */ (function () {
        function AllowedRolesGuardService(usersSvc, snackBar) {
            this.usersSvc = usersSvc;
            this.snackBar = snackBar;
        }
        AllowedRolesGuardService.prototype.canActivate = function (route, state) {
            var _a;
            if (!((_a = this.usersSvc.getCurrentUser()) === null || _a === void 0 ? void 0 : _a.hasRole(route.data.roles))) {
                var snackBarRef_1 = this.snackBar.open("You are not allowed to navigate to the " + route.data.title + ".", 'Dismiss');
                snackBarRef_1.onAction().subscribe(function () {
                    snackBarRef_1.dismiss();
                });
                return false;
            }
            else {
                return true;
            }
        };
        return AllowedRolesGuardService;
    }());
    AllowedRolesGuardService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AllowedRolesGuardService_Factory() { return new AllowedRolesGuardService(i0.ɵɵinject(UsersService), i0.ɵɵinject(i2$1.MatSnackBar)); }, token: AllowedRolesGuardService, providedIn: "root" });
    AllowedRolesGuardService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    AllowedRolesGuardService.ctorParameters = function () { return [
        { type: UsersService },
        { type: i2$1.MatSnackBar }
    ]; };

    var AuthorizationInterceptorService = /** @class */ (function () {
        function AuthorizationInterceptorService(usersSvc) {
            this.usersSvc = usersSvc;
        }
        AuthorizationInterceptorService.prototype.withAccessToken = function (req) {
            return req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + this.usersSvc.getAccessToken()),
            });
        };
        AuthorizationInterceptorService.prototype.withRefreshToken = function (req) {
            return req.clone({
                method: 'GET',
                headers: req.headers.set('Authorization', 'Bearer ' + this.usersSvc.getRefreshToken()),
            });
        };
        AuthorizationInterceptorService.prototype.intercept = function (req, next) {
            var _this = this;
            if (req.url.endsWith('/api/users/login')) {
                return next.handle(req);
            }
            if (req.url.endsWith('/api/users/refresh')) {
                return next.handle(this.withRefreshToken(req));
            }
            return next.handle(this.withAccessToken(req)).pipe(operators.catchError(function (err, caught) {
                if (err instanceof i1.HttpErrorResponse) {
                    if (err.status === 401) {
                        return _this.usersSvc.refreshUser()
                            .pipe(operators.switchMap(function () { return next.handle(_this.withAccessToken(req)); }));
                    }
                    else {
                        return rxjs.throwError(err);
                    }
                }
                return caught;
            }));
        };
        return AuthorizationInterceptorService;
    }());
    AuthorizationInterceptorService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AuthorizationInterceptorService_Factory() { return new AuthorizationInterceptorService(i0.ɵɵinject(UsersService)); }, token: AuthorizationInterceptorService, providedIn: "root" });
    AuthorizationInterceptorService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    AuthorizationInterceptorService.ctorParameters = function () { return [
        { type: UsersService }
    ]; };

    var LoggedInGuardService = /** @class */ (function () {
        function LoggedInGuardService(usersSvc, router) {
            this.usersSvc = usersSvc;
            this.router = router;
        }
        LoggedInGuardService.prototype.canActivate = function (route, state) {
            if (!this.usersSvc.getCurrentUser()) {
                return this.router.parseUrl('/login');
            }
            else {
                return true;
            }
        };
        return LoggedInGuardService;
    }());
    LoggedInGuardService.ɵprov = i0.ɵɵdefineInjectable({ factory: function LoggedInGuardService_Factory() { return new LoggedInGuardService(i0.ɵɵinject(UsersService), i0.ɵɵinject(i2.Router)); }, token: LoggedInGuardService, providedIn: "root" });
    LoggedInGuardService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    LoggedInGuardService.ctorParameters = function () { return [
        { type: UsersService },
        { type: i2.Router }
    ]; };

    /*
     * Public API Surface of user-lib
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AllowedRolesGuardService = AllowedRolesGuardService;
    exports.AuthorizationInterceptorService = AuthorizationInterceptorService;
    exports.ChangePasswordFormComponent = ChangePasswordFormComponent;
    exports.CurrentUser = CurrentUser;
    exports.CurrentUserComponent = CurrentUserComponent;
    exports.LoggedInGuardService = LoggedInGuardService;
    exports.LoginFormComponent = LoginFormComponent;
    exports.UserLibModule = UserLibModule;
    exports.UserProfileComponent = UserProfileComponent;
    exports.UsersService = UsersService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=t4d-wnow-user-lib.umd.js.map
