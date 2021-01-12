import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
export declare class CurrentUserComponent implements OnInit {
    private router;
    private usersSvc;
    get loggedIn(): boolean;
    get displayName(): string;
    get username(): string;
    constructor(router: Router, usersSvc: UsersService);
    ngOnInit(): void;
    navigateToProfile(): Promise<boolean>;
    navigateToLogout(): Promise<boolean>;
    navigateToLogin(): Promise<boolean>;
}
