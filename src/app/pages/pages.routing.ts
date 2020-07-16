// ng-router to generate 
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { CuentaComponent } from './cuenta/cuenta.component';

const routes: Routes = [
    { 
        path: 'home',
        component: PagesComponent,
        children: [
          { path: '', component: HomeComponent },
          { path: 'cuenta', component: CuentaComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
