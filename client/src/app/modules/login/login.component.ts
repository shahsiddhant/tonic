import { Component } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    public name: string;
    public email: string;
    public password: string;

    public register(): void {
        // Call API to register someone
    }
}
