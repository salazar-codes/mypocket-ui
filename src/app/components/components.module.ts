import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormMovimientoComponent } from './form-movimiento/form-movimiento.component';

@NgModule({
  declarations: [
    FormMovimientoComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ComponentsModule { }
