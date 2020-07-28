import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UsuarioService } from '../services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor( public _usuarioService:UsuarioService) { }

  intercept( req: HttpRequest<any>, next: HttpHandler ):Observable<HttpEvent<any>>{

    let reqClone: any;

    if( this._usuarioService.token ){
      reqClone = this.getSecureHeaders(req);
    }else{
      reqClone = this.getSecureHeadersForLogin(req);
      //reqClone = req.clone();
    }
    
    return next.handle(reqClone).pipe(
      tap(
        next => {},
        error => {
          if (error instanceof HttpErrorResponse) {
            // Acción ante el error
            //this.manejarError(error);
          }
        }
      )
    );

  }

  getSecureHeaders( req: HttpRequest<any> ){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this._usuarioService.token
    });
    return req.clone({
      headers
    });
  }

  getSecureHeadersForLogin( req: HttpRequest<any> ){
    const headers = new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa('angularapp:12345')
    });
    return req.clone({
      headers
    });
  }

}
