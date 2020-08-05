import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Movimiento } from '../models/movimiento.model';

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
      tap(
        (resp:any) => {
          resp.sort((a, b) => (a.createAt > b.createAt ? -1 : 1))
        }
      ),
      map( 
        (resp:any) => resp 
      )); 
      // map( (resp:any) => {
      //   //console.log('resp',resp);
      //   resp.sort((a, b) => (a.createAt > b.createAt ? -1 : 1));        
      // }));
  }

  getMovimientosByCuenta(id: number){
    return this.http.get(`${ base_url }/movimientos/cuenta/${id}`).pipe(
      map( 
        (resp:any) => resp 
      )); 
  }

  createMovimiento(movimiento: Movimiento){
    return this.http.post(`${ base_url }/movimientos`, movimiento)
            .pipe(
              map ( (resp:any) => {
                return resp;
              })
            );
  }

}