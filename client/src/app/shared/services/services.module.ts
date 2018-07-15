import { NgModule } from '@angular/core';
import { LoginService } from './login';
import { AuthGuardService } from './auth-guard';

@NgModule({
    declarations: [],
    providers: [
        LoginService,
        AuthGuardService
    ]
})
export class ServicesModule { }
