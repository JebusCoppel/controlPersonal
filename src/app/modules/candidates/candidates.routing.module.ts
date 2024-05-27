import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { ByAllPageComponent } from './../countries/pages/by-all-page/by-all-page.component';
// import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
// import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
// import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
// import { CountryPageComponent } from './pages/country-page/country-page.component';

const routes: Routes = [
    {
        path: "candidates",
        // component: CandidatesListComponent
    },
    {
      path: "by:id",
      // component: candidateInfoComponent
    },
    {
        path: "**",
        redirectTo: 'home'
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
export class CountriesRoutingModule { }





