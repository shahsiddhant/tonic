import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginService } from '../login';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private login: LoginService, private router: Router) { }

    canActivate() {
        if (!this.login.isLoggedIn()) {
            this.router.navigateByUrl('/');
            return false;
        }
        return true;
    }
}
