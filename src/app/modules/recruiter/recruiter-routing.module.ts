import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatesComponent } from './pages/candidates/candidates.component';
// import { CandidateInfoComponent } from './pages/candidate-info/candidate-info.component';

const routes: Routes = [
    {
        path: "candidates",
        component: CandidatesComponent
    },
    {
        path: "**",
        redirectTo: "recruiter"
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
export class RecruiterRoutingModule { }





