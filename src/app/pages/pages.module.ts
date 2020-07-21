import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from "@angular/router";
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

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
    RouterModule,
    SharedModule,
    HttpClientModule
  ]
})
export class PagesModule { }
