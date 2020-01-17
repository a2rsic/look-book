import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CommonModule } from '@angular/common';


const routes: Routes = [
    {
        path: 'photos',
        component: LandingPageComponent
    },
    { path: '', redirectTo: 'photos', pathMatch: 'full' },

];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }