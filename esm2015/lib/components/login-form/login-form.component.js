import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
export class LoginFormComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vcHJvamVjdHMvdXNlci1saWIvc3JjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvbG9naW4tZm9ybS9sb2dpbi1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLFdBQVcsRUFBYSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVNwRSxNQUFNLE9BQU8sa0JBQWtCO0lBeUI3QixZQUFvQixFQUFlO1FBQWYsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQXRCbkMsdUJBQWtCLEdBQUcsS0FBSyxDQUFDO1FBRzNCLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO1FBR3RDLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO0lBZ0JNLENBQUM7SUFkeEMsSUFBSSw4QkFBOEI7UUFDaEMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDM0QsQ0FBQztJQUVELElBQUksaUJBQWlCO1FBQ25CLE1BQU0sbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDM0QsT0FBTyxtQkFBb0IsQ0FBQyxPQUFPLENBQUM7SUFDdEMsQ0FBQztJQUVELElBQUksaUJBQWlCO1FBQ25CLE1BQU0sbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDM0QsT0FBTyxtQkFBb0IsQ0FBQyxPQUFPLENBQUM7SUFDdEMsQ0FBQztJQUlELHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFFdkIsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDN0IsUUFBUSxFQUFFLENBQUMsWUFBWSxFQUFFLEVBQUUsVUFBVSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDL0QsUUFBUSxFQUFFLENBQUMsVUFBVSxFQUFFLEVBQUUsVUFBVSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7U0FDOUQsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELE9BQU87UUFDTCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO1FBQy9CLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLFNBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3BCLENBQUM7OztZQW5ERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsa2tEQUEwQzs7YUFFM0M7OztZQVJRLFdBQVc7OztvQkFjakIsTUFBTTtvQkFHTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBMb2dpbkZvcm0gfSBmcm9tICcuLi8uLi9tb2RlbHMvTG9naW5Gb3JtJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWxvZ2luLWZvcm0nLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9naW4tZm9ybS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xvZ2luLWZvcm0uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgbG9naW5Gb3JtITogRm9ybUdyb3VwO1xuICBsb2dpbkZvcm1TdWJtaXR0ZWQgPSBmYWxzZTtcblxuICBAT3V0cHV0KClcbiAgbG9naW4gPSBuZXcgRXZlbnRFbWl0dGVyPExvZ2luRm9ybT4oKTtcblxuICBAT3V0cHV0KClcbiAgY2xlYXIgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgZ2V0IHNob3dMb2dpbkZvcm1WYWxpZGF0aW9uU3VtbWFyeSgpIHtcbiAgICByZXR1cm4gdGhpcy5sb2dpbkZvcm0uaW52YWxpZCAmJiB0aGlzLmxvZ2luRm9ybVN1Ym1pdHRlZDtcbiAgfVxuXG4gIGdldCBzaG93VXNlcm5hbWVFcnJvcigpIHtcbiAgICBjb25zdCB1c2VybmFtZUZvcm1Db250cm9sID0gdGhpcy5sb2dpbkZvcm0uZ2V0KCd1c2VybmFtZScpO1xuICAgIHJldHVybiB1c2VybmFtZUZvcm1Db250cm9sIS5pbnZhbGlkO1xuICB9XG5cbiAgZ2V0IHNob3dQYXNzd29yZEVycm9yKCkge1xuICAgIGNvbnN0IHBhc3N3b3JkRm9ybUNvbnRyb2wgPSB0aGlzLmxvZ2luRm9ybS5nZXQoJ3Bhc3N3b3JkJyk7XG4gICAgcmV0dXJuIHBhc3N3b3JkRm9ybUNvbnRyb2whLmludmFsaWQ7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZiOiBGb3JtQnVpbGRlcikgeyB9XG5cbiAgLy8gdXNlcm5hbWU6ICdhZG9kc3dvcnRoJ1xuICAvLyBwYXNzd29yZDogJ3Rlc3RwYXNzJ1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMubG9naW5Gb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICB1c2VybmFtZTogWydhZG9kc3dvcnRoJywgeyB2YWxpZGF0b3JzOiBbVmFsaWRhdG9ycy5yZXF1aXJlZF0gfV0sXG4gICAgICBwYXNzd29yZDogWyd0ZXN0cGFzcycsIHsgdmFsaWRhdG9yczogW1ZhbGlkYXRvcnMucmVxdWlyZWRdIH1dLFxuICAgIH0pO1xuICB9XG5cbiAgZG9Mb2dpbigpOiB2b2lkIHtcbiAgICB0aGlzLmxvZ2luRm9ybVN1Ym1pdHRlZCA9IHRydWU7XG4gICAgaWYgKHRoaXMubG9naW5Gb3JtLmludmFsaWQpIHJldHVybjtcbiAgICB0aGlzLmxvZ2luLmVtaXQodGhpcy5sb2dpbkZvcm0hLnZhbHVlKTtcbiAgfVxuXG4gIGRvQ2xlYXIoKTogdm9pZCB7XG4gICAgdGhpcy5sb2dpbkZvcm0hLnJlc2V0KCk7XG4gICAgdGhpcy5jbGVhci5lbWl0KCk7XG4gIH1cblxufVxuIl19