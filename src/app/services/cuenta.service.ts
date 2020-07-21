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

    return this.http.get(`${ base_url }/cuentas/usuario/${ id }`,{
      headers:{
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGVsbGlkb3MiOiJTYWxhemFyIiwidXNlcl9uYW1lIjoianNhbGF6YXIiLCJzY29wZSI6WyJyZWFkIiwid3JpdGUiXSwiZXhwIjoxNTk1MjkyMTM1LCJhdXRob3JpdGllcyI6WyJST0xFX0FETUlOIiwiUk9MRV9VU0VSIl0sImp0aSI6ImQ5ZjQwYTExLWJlZTEtNDA3Mi05YjBiLWU3MWQ4OGI2ZDcwYiIsImVtYWlsIjoianNhbGF6YXJAZ21haWwuY29tIiwiY2xpZW50X2lkIjoiYW5ndWxhcmFwcCIsInVzZXJuYW1lIjoianNhbGF6YXIiLCJub21icmVzIjoiSmltbXkifQ.hixd9idH1TkljtxjvTYkchBbqlxb2XlqkH0bV8FxwbE'
      }
    }).pipe(
      tap( (resp:any) => {
        console.log('resp',resp);
      }),
      //map( resp => true ),
      catchError( error => of(null))
    );
    
  }

}
