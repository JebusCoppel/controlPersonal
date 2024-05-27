import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'candidate',
    loadChildren: () => import('./modules/candidates/candidates.module').then( m => m.CandidatesModule)
  },
  {
    path: 'recruiter',
    loadChildren: () => import('./modules/recruiter/recruiter.module').then( m => m.RecruiterModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  },

]


@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule {  }
