import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map, tap, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Usuario } from '../models/usuario.model';

const base_url_auth = environment.base_url_auth;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url:string = base_url_auth;

  usuario: Usuario;
  token: string;

  constructor( private http: HttpClient,
               public router: Router) { }

  login( username: string, password: string ){
    
    let params = new URLSearchParams();
    params.append('username', username);
    params.append('password', password);    
    params.append('grant_type','password');

    return this.http.post( this.url, params.toString() ).pipe(
      map( 
        (resp: any) => {
          this.usuario = new Usuario(
                          resp.username,
                          resp.nombres,
                          resp.apellidos,
                          resp.email,
                          resp.enabled,
                          resp.createAt,
                          );

          this.token = resp.access_token;
          this.setStorageToken(this.token);
          this.setStorageUser(this.usuario);

          return resp;
        }
      )
    );

  }

  // setCurrentUser(user: Usuario){
  //   this.usuario = user;
  //   this.setStorageUser(user);
  // }
  
  logout(){

    //this.usuario = null;
    this.usuario = null;
    this.token = '';

    localStorage.removeItem('usuario');
    localStorage.removeItem('token');

    //localStorage.clear(); //PARA BORRAR TODO DEL LS
    this.router.navigate(['/login']);
  }

  setStorageToken(token:string){
    localStorage.setItem('token', token);
  }
  setStorageUser(usuario:Usuario){
    localStorage.setItem('usuario', JSON.stringify( usuario ) );
  }

  getStorage(){
    
    if( localStorage.getItem('token') ){     
      this.usuario = JSON.parse( localStorage.getItem('usuario') );
      this.token = localStorage.getItem('token');
    }else{
      this.usuario = null;
      this.token = '';
    }
  }

}
