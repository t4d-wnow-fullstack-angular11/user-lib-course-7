import { OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginForm } from '../../models/LoginForm';
export declare class LoginFormComponent implements OnInit {
    private fb;
    loginForm: FormGroup;
    loginFormSubmitted: boolean;
    login: EventEmitter<LoginForm>;
    clear: EventEmitter<void>;
    get showLoginFormValidationSummary(): boolean;
    get showUsernameError(): boolean;
    get showPasswordError(): boolean;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
    doLogin(): void;
    doClear(): void;
}
