import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { FormValidatorService } from '../../services/util/form-validator.service';
import { StringUtilService } from '../../services/util/string-util.service';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // REACTIVE FORMS
  formaLogin: FormGroup;

  constructor( public _customValidators: FormValidatorService,
               public _stringUtil: StringUtilService, 
               public router: Router,
               public _userService: UsuarioService
               ) { }

  ngOnInit(): void {

    this.formaLogin = new FormGroup({
      username: new FormControl(null,[Validators.required,this._customValidators.onlyLettersAndNumbers]),
      password: new FormControl(null,[Validators.required])
    });

  }

  cleanFormControl(event: any): void {
    let name = event.srcElement.name;
    this.formaLogin.get(name).setValue(this._stringUtil.cleanFormString(this.formaLogin.get(name).value));
    event.target.value = this._stringUtil.cleanFormString(event.target.value);
  }

  validarLogin(){

    if(this.formaLogin.valid){
    
      // this._modalService.modalCargando('Verificando');  

      // Llamando al servicio Login
      this._userService.login(this.formaLogin.controls['username'].value, this.formaLogin.controls['password'].value).subscribe( 
        
        resp => {
          if( resp.access_token ){
            // Obteniendo datos del usuario con el que se ingresó
            // this._userService.getCurrentUser().subscribe(
            //   resp=> {
            //     this._loginService.setCurrentUser(resp);
            //     this._modalService.cerrarModal();
                
            //   }
            // );
            this.redirectingUser(resp);
            
          }else{
            // this._modalService.modalError('Error','Credenciales incorrectas');
          }
        },
        error=>{
          // this._modalService.modalError('Credenciales inválidas','Verifique e intente de nuevo');
        }
      );

    }

  }

  redirectingUser(user){

    // const tipoUsuario = user.userType;
    let ruta = '/home';

    // switch(tipoUsuario){
      
    //   case 1:
    //     ruta = 'home/admin'
    //     break;
    //   case 2:
    //     ruta = 'home/alumno'
    //     break;
    //   default:
    //     ruta = 'home/alumno'
    // }

    this.router.navigate([ruta]);

  }
  
}
