import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { CuentaService } from '../../services/cuenta.service';
import { MovimientoService } from '../../services/movimiento.service';

import { Cuenta } from '../../models/cuenta.model';
import { Movimiento } from '../../models/movimiento.model';
import { UsuarioService } from '../../services/usuario.service';

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

    this.movimientoService.getMovimientosByUsuario(this.usuarioId).subscribe(
      resp => {
        this.movimientos = resp;
      }
    )
  }

  // ENVIANDO FACTURAS AL FORMULARIO DE NUEVO PAGO
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

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
