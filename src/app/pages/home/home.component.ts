import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

import { CuentaService } from '../../services/cuenta.service';
import { MovimientoService } from '../../services/movimiento.service';

import { Cuenta } from '../../models/cuenta.model';
import { Movimiento } from '../../models/movimiento.model';
import { UsuarioService } from '../../services/usuario.service';
import { FormMovimientoComponent } from '../../components/form-movimiento/form-movimiento.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cuentas: Cuenta[];
  movimientos: Movimiento[];

  usuarioId: number;
  closeResult = '';

  _modalOptionsNormal: NgbModalOptions = {
    backdrop: 'static',
    keyboard: false,
    size: 'lg',
    centered: false
  };

  constructor( public router: Router,
               private route: ActivatedRoute,
               public cuentaService: CuentaService,
               public movimientoService: MovimientoService,
               public usuarioService: UsuarioService,
               private modalService: NgbModal,
                ) {
                this.usuarioId = usuarioService.usuario.id;
                }

  ngOnInit(): void {
    
    this.cuentaService.getCuentasByUsuario(this.usuarioId).subscribe(
      resp => {
        this.cuentas = resp;
      }
    );

    this.getMovimientos();
  }

  getMovimientos(){
    this.movimientoService.getMovimientosByUsuario(this.usuarioId).subscribe(
      resp => {
        this.movimientos = resp;
      }
    )
  }

  // VER EL DETALLE DE LA CUENTA
  verCuenta( cuenta:Cuenta ){

    let navigationExtras: NavigationExtras = {
      queryParams: {
          "cuentaSeleccionada": JSON.stringify(cuenta)
      },
      skipLocationChange: true,
      // replaceUrl: true,
      // relativeTo: this.route
    };
    
    this.router.navigate(["/home/cuenta"], navigationExtras);
  }

  test(n: number){
    console.log('test', n);
  }

  openModalFormMovimiento(){
    const modalRef = this.modalService.open(FormMovimientoComponent, this._modalOptionsNormal);
    modalRef.componentInstance.cuentas = this.cuentas;
    modalRef.result.then((result) => {
      console.log('respuesta',result);
      this.getMovimientos();
    }, (reason) => {
      console.log('reason',reason);
    });
    
  }


}
