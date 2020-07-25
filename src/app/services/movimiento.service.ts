import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class MovimientoService {

  constructor( private http: HttpClient ) { }

  getAllMovimientos(){
    
    return this.http.get(`${ base_url }/movimientos`).pipe(
      map( 
        (resp:any) => resp 
      )); 
  }

  getMovimientosByUsuario(id: number){
    return this.http.get(`${ base_url }/movimientos/usuario/${id}`).pipe(
      map( 
        (resp:any) => resp 
      )); 
  }

  getMovimientosByCuenta(id: number){
    return this.http.get(`${ base_url }/movimientos/cuenta/${id}`).pipe(
      map( 
        (resp:any) => resp 
      )); 
  }

}