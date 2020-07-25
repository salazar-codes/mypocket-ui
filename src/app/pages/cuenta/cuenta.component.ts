import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CuentaService } from '../../services/cuenta.service';
import { MovimientoService } from '../../services/movimiento.service';

import { Cuenta } from '../../models/cuenta.model';
import { Movimiento } from '../../models/movimiento.model';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})
export class CuentaComponent implements OnInit {
  
  cuenta: Cuenta;
  movimientos: Movimiento[];

  constructor(private route: ActivatedRoute,
              public cuentaService: CuentaService,
              public movimientoService: MovimientoService) {
    
    this.getCuentaForHome(this.route);
    
  }

  ngOnInit(): void {
    
    this.getMovimientos();

  }

  getMovimientos(){
    
    this.movimientoService.getMovimientosByCuenta(this.cuenta.id).subscribe(
      resp => {
        this.movimientos = resp;
      }
    )

  }

  getCuentaForHome(route: ActivatedRoute){
      
    route.queryParams.subscribe(params => {
      try{
          this.cuenta = JSON.parse(params["cuentaSeleccionada"]);
      }catch{
          
      }
    });
    
  }

}
