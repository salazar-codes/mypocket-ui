import { Component, OnInit } from '@angular/core';

import { CuentaService } from '../../services/cuenta.service';

import { Cuenta } from '../../models/cuenta.model';
import { MovimientoService } from '../../services/movimiento.service';
import { Movimiento } from '../../models/movimiento.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cuentas: Cuenta[];
  movimientos: Movimiento[];

  constructor( public cuentaService: CuentaService,
               public movimientoService: MovimientoService ) { }

  ngOnInit(): void {
    
    this.cuentaService.getCuentas(1).subscribe(
      resp => {
        this.cuentas = resp;
        console.log('CUENTAS', this.cuentas)
      }
    );

    this.movimientoService.getAllMovimientos().subscribe(
      resp => {
        this.movimientos = resp;
        console.log('MOVIMIENTOS', this.movimientos)
      }
    )

  }

  test(n: number){
    console.log('test', n);
  }

}
