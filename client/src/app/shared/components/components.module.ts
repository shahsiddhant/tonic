import { NgModule } from '@angular/core';
import { NavComponent } from './nav';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


// Add shared components to both decrataions and exports
@NgModule({
    declarations: [
        NavComponent
    ],
    exports: [
        NavComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    providers: []
})
export class ComponentsModule { }
