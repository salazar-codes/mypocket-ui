import { Component, OnInit } from '@angular/core';

import { CuentaService } from '../../services/cuenta.service';

import { Cuenta } from '../../models/cuenta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cuentas: Cuenta[];

  constructor( public cuentaService: CuentaService ) { }

  ngOnInit(): void {
    
    this.cuentaService.getCuentas(1).subscribe(
      resp => {
        this.cuentas = resp;
        console.log('CUENTAS', this.cuentas)
      }
    );

  }

  test(n: number){
    console.log('test', n);
  }

}
