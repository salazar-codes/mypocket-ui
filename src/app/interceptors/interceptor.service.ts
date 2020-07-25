import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor() { }

  intercept( req: HttpRequest<any>, next: HttpHandler ):Observable<HttpEvent<any>>{

    // console.log('int');

    let reqClone: any;
    reqClone = this.getSecureHeaders(req);
    
    // if( this._loginService.token ){
    //   reqClone = this.getSecureHeaders(req);
    // }else{
    //   reqClone = req.clone();
    // }
    
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
      //'Authorization': 'Bearer ' + this._loginService.token
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGVsbGlkb3MiOiJTYWxhemFyIiwidXNlcl9uYW1lIjoianNhbGF6YXIiLCJzY29wZSI6WyJyZWFkIiwid3JpdGUiXSwiZXhwIjoxNTk1NjU4OTgwLCJhdXRob3JpdGllcyI6WyJST0xFX0FETUlOIiwiUk9MRV9VU0VSIl0sImp0aSI6ImZlYzdmZGM3LTVmNDYtNGYzMS05M2RmLWRlNDNlOGUyZDFjOSIsImVtYWlsIjoianNhbGF6YXJAZ21haWwuY29tIiwiY2xpZW50X2lkIjoiYW5ndWxhcmFwcCIsInVzZXJuYW1lIjoianNhbGF6YXIiLCJub21icmVzIjoiSmltbXkifQ.aBSfpkOlGbxGTiG_I5vqRu14LleqAbhobd2ssStJyec'
    });

    return req.clone({
      headers
    });

  }

}
