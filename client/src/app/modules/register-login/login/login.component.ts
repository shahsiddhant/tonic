import { Component } from '@angular/core';
import { LoginService } from 'services';
import { Customer, TokenPayload } from 'services';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    public email: string;
    public password: string;
    public currentCusotmer: Customer = null;
    constructor(
        private loginService: LoginService,
        private router: Router
    ) {

    }
    public login(): void {
        // Call API to register someone
        const loginCreds: TokenPayload = {
            email: this.email,
            password: this.password
        };

        this.loginService.login(loginCreds).subscribe((res) => {
            this.router.navigateByUrl('/profile');
        }, () => {
            console.log('failed');
        });
    }
}
