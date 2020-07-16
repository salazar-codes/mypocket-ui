import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// MÓDULOS
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';

const routes: Routes = [
  
  // path: '/home' PagesRoutingModule
  // path: '/auth' AuthRoutingModule
  
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: NopagefoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
