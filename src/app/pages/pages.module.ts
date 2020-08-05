import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from "@angular/router";
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from '../components/components.module';

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
    HttpClientModule,
    NgbModule,
    ComponentsModule
  ]
})
export class PagesModule { }
