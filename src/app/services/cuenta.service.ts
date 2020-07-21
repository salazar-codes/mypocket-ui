import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { tap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

  constructor( private http: HttpClient ) { }

  getCuentas(id: number){

    return this.http.get(`${ base_url }/cuentas/usuario/${ id }`).pipe(
      tap( (resp:any) => {
        //console.log('resp',resp);
      }),
      //map( resp => true ),
      catchError( error => of(null))
    );
    
  }

}