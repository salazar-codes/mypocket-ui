import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from "@angular/router";

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { CuentaComponent } from './cuenta/cuenta.component';

@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    CuentaComponent,
  ],
  exports: [
    PagesComponent,
    HomeComponent,
    CuentaComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PagesModule { }
