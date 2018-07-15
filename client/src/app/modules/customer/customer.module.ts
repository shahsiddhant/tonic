import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        ProfileComponent
    ],
    imports: [
        FormsModule,
        RouterModule
    ]
})
export class CustomerModule { }
