import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersService } from '../services/users.service';
export declare class AllowedRolesGuardService implements CanActivate {
    private usersSvc;
    private snackBar;
    constructor(usersSvc: UsersService, snackBar: MatSnackBar);
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>;
}
