import { NgModule } from '@angular/core';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        FormsModule,
        RouterModule
    ]
})
export class RegisterLoginModule { }
