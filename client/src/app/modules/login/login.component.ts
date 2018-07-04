import { Component } from '@angular/core';
import { LoginService } from '../../shared/services';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    public name: string;
    public email: string;
    public password: string;
    constructor(private loginService: LoginService) {

    }
    public register(): void {
        // Call API to register someone
        this.loginService.authenticate().subscribe(() => {
            console.log('Cool');
        }, () => {
            console.log('failed');
        });
    }
}
