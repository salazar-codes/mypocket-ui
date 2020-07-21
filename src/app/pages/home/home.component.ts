import { Component, OnInit } from '@angular/core';

import { CuentaService } from '../../services/cuenta.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( public cuentaService: CuentaService ) { }

  ngOnInit(): void {
    
    this.cuentaService.getCuentas(1).subscribe(
      resp => console.log('ESTO LLEGA', resp)
    );

  }

  test(n: number){
    console.log('test', n);
  }

}
