import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringUtilService {

  constructor() { }
  
  trimSpacesString( value: string ){
    value = value.replace(/\s\s+/g, ' ');
    value = value.trim();
    return value;
  }

  cleanFormString( value: string ){
    value = value.replace(/\s\s+/g, ' ');
    value = value.trim();
    return value;
  }

  cleanFormStringUpper( value: string ){
    value = value.replace(/\s\s+/g, ' ');
    value = value.trim();
    value = value.toUpperCase();
    return value;
  }

}
