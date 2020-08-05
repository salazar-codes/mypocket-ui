import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class TipoMovimientoService {

  constructor( private http: HttpClient ) { }

  getAllTiposMovimiento(){
    
    return this.http.get(`${ base_url }/tipoMovimientos`).pipe(
      map( 
        (resp:any) => resp 
      )); 
  }

}
