import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register.component';

const routes: Routes = [
    // {
    //     path:"",
    //     component: RegisterComponent
    // },
    {
        path: "register",
        component: RegisterComponent
    },
    {
        path: "**",
        redirectTo: 'register'
    }
]


@NgModule({
    imports: [
        RouterModule.forChild( routes )
    ],
    exports: [
        RouterModule
    ],
})
export class CandidatesRoutingModule { }





