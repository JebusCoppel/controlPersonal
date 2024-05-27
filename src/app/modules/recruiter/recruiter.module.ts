import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidatesListComponent } from './components/candidates-list/candidates-list.component';
import { CandidateInfoComponent } from './components/candidate-info/candidate-info.component';
import { CandidatesComponent } from './pages/candidates/candidates.component';
import { RecruiterRoutingModule } from './recruiter-routing.module';



@NgModule({
  declarations: [
    CandidatesListComponent,
    CandidatesComponent,
    CandidateInfoComponent
  ],
  imports: [
    CommonModule,
    RecruiterRoutingModule,
  ]
})
export class RecruiterModule { }
