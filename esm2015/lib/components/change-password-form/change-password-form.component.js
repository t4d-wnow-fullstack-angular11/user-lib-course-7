import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { confirmValue } from '@t4d-wnow/shared-lib';
export class ChangePasswordFormComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXBhc3N3b3JkLWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL3VzZXItbGliL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NoYW5nZS1wYXNzd29yZC1mb3JtL2NoYW5nZS1wYXNzd29yZC1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFhLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQU9wRCxNQUFNLE9BQU8sMkJBQTJCO0lBT3RDLFlBQW9CLEVBQWU7UUFBZixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBSm5DLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQXNCLENBQUM7SUFJakIsQ0FBQztJQUV4QyxRQUFRO1FBQ04sSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ3RDLGVBQWUsRUFBRSxFQUFFO1lBQ25CLFdBQVcsRUFBRSxFQUFFO1lBQ2YsZUFBZSxFQUFFLEVBQUU7U0FDcEIsRUFBRSxFQUFFLFVBQVUsRUFBRSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRU0sZ0JBQWdCO1FBQ3JCLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssRUFBRTtZQUNqQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDekQ7SUFDSCxDQUFDOzs7WUExQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLGtyQ0FBb0Q7O2FBRXJEOzs7WUFUbUIsV0FBVzs7OzZCQVk1QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBDaGFuZ2VQYXNzd29yZEZvcm0gfSBmcm9tICcuLi8uLi9tb2RlbHMvQ2hhbmdlUGFzc3dvcmRGb3JtJztcbmltcG9ydCB7IGNvbmZpcm1WYWx1ZSB9IGZyb20gJ0B0NGQtd25vdy9zaGFyZWQtbGliJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWNoYW5nZS1wYXNzd29yZC1mb3JtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoYW5nZS1wYXNzd29yZC1mb3JtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2hhbmdlLXBhc3N3b3JkLWZvcm0uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENoYW5nZVBhc3N3b3JkRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQE91dHB1dCgpXG4gIGNoYW5nZVBhc3N3b3JkID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFuZ2VQYXNzd29yZEZvcm0+KCk7XG5cbiAgY2hhbmdlUGFzc3dvcmRGb3JtITogRm9ybUdyb3VwO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNoYW5nZVBhc3N3b3JkRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgY3VycmVudFBhc3N3b3JkOiAnJyxcbiAgICAgIG5ld1Bhc3N3b3JkOiAnJyxcbiAgICAgIGNvbmZpcm1QYXNzd29yZDogJycsXG4gICAgfSwgeyB2YWxpZGF0b3JzOiBbY29uZmlybVZhbHVlKCduZXdQYXNzd29yZCcsICdjb25maXJtUGFzc3dvcmQnKV0gfSk7XG4gIH1cblxuICBwdWJsaWMgZG9DaGFuZ2VQYXNzd29yZCgpIHtcbiAgICBpZiAodGhpcy5jaGFuZ2VQYXNzd29yZEZvcm0udmFsaWQpIHtcbiAgICAgIHRoaXMuY2hhbmdlUGFzc3dvcmQuZW1pdCh0aGlzLmNoYW5nZVBhc3N3b3JkRm9ybS52YWx1ZSk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==