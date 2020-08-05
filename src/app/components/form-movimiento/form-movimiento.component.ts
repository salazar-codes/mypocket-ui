import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators,} from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { TipoMovimientoService } from '../../services/tipo-movimiento.service';
import { TipoMovimiento } from '../../models/tipo-movimiento.model';
import { Cuenta } from '../../models/cuenta.model';
import { Movimiento } from '../../models/movimiento.model';
import { MovimientoService } from '../../services/movimiento.service';

@Component({
  selector: 'app-form-movimiento',
  templateUrl: './form-movimiento.component.html',
  styleUrls: ['./form-movimiento.component.css']
})
export class FormMovimientoComponent implements OnInit {

  @Input() cuentas: Cuenta[];
  
  tiposMovimiento: TipoMovimiento[] = [];
  movimiento: Movimiento = new Movimiento();

  // REACTIVE FORMS
  formaMovimiento: FormGroup;

  constructor( public activeModal: NgbActiveModal,
               private tipoMovimientoService: TipoMovimientoService,
               private movimientoService: MovimientoService,
              ) {}

  ngOnInit(): void {

    this.tipoMovimientoService.getAllTiposMovimiento().subscribe(
      async resp => {
        this.tiposMovimiento = await resp; 
        //this.searchSetValueFormControl(this.tiposMovimiento, this.movimiento.tipoMovimiento, 'tipoMovimiento');
      }
    );

    // REACTIVE FORMS FORMAS
    this.formaMovimiento = new FormGroup({
      titulo: new FormControl(this.movimiento.titulo, [Validators.required]),
      descripcion: new FormControl(this.movimiento.descripcion, [Validators.required]),
      cuenta: new FormControl(null, [Validators.required]),
      tipoMovimiento: new FormControl(null, [Validators.required]),
      monto: new FormControl(this.movimiento.monto, [Validators.required]),
    });

  }

  searchSetValueFormControl(objs:any, objSelect:any, controlName:string){
    for (let i = 0; i < objs.length; i++) {
      if( objSelect.id === objs[i].id){
          this.formaMovimiento.controls[controlName].setValue(objs[i]);
          return;
      }
    }
}

  guardarMovimiento(){

    if (this.formaMovimiento.valid) {

      this.getInfoForm();

      this.movimientoService.createMovimiento(this.movimiento).subscribe(
        resp => {
          this.activeModal.close(resp);
        } 
      )
      
    }

  }

  getInfoForm(){
    
    this.movimiento.titulo = this.formaMovimiento.controls['titulo'].value;
    this.movimiento.descripcion = this.formaMovimiento.controls['descripcion'].value;
    this.movimiento.cuenta = this.formaMovimiento.controls['cuenta'].value;
    this.movimiento.tipoMovimiento = this.formaMovimiento.controls['tipoMovimiento'].value;
    this.movimiento.monto = this.formaMovimiento.controls['monto'].value;
    
  }

  closeModal() {
    this.activeModal.close();
  }
  
}
