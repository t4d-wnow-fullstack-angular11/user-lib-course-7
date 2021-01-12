import { OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ChangePasswordForm } from '../../models/ChangePasswordForm';
export declare class ChangePasswordFormComponent implements OnInit {
    private fb;
    changePassword: EventEmitter<ChangePasswordForm>;
    changePasswordForm: FormGroup;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
    doChangePassword(): void;
}
