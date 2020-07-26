import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValidatorService {

  
  
  constructor() { }

  noWhitespaceSides(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }

  onlyLetters(control: FormControl){
    const onlyLettersPattern: RegExp = new RegExp('^[a-zA-Z ]+$');
    const isOnlyLetters = onlyLettersPattern.test(control.value || '');
    const isValid = isOnlyLetters;
    return isValid ? null : { 'onlyLetters': true };
  }

  onlyLettersWithAccents(control: FormControl){
    // const onlyLettersPattern: RegExp = new RegExp('^[ñA-Za-z _]*[ñA-Za-z][ñA-Za-z _]*$');
    const onlyLettersPattern: RegExp = new RegExp('^[ñA-Za-zá-úÁ-Ú _]*[ñA-Za-zá-úÁ-Ú][ñA-Za-zá-úÁ-Ú _]*$');
    const isOnlyLetters = onlyLettersPattern.test(control.value || '');
    const isValid = isOnlyLetters;
    return isValid ? null : { 'onlyLetters': true };
  }

  onlyNumbers(control: FormControl){
    const onlyNumbersPattern: RegExp = new RegExp('^[0-9]+$');
    const isOnlyNumbers = onlyNumbersPattern.test(control.value || '');
    const isValid = isOnlyNumbers;
    return isValid ? null : { 'onlyNumbers': true };
  }

  onlyLettersAndNumbers(control: FormControl){
    const onlyNumbersPattern: RegExp = new RegExp('^[0-9a-zA-Z]+$');
    const isOnlyNumbers = onlyNumbersPattern.test(control.value || '');
    const isValid = isOnlyNumbers;
    return isValid ? null : { 'onlyLettersNumbers': true };
  }
  
  equalsPasswords( passField1:string, passField2:string ){
    return ( group: FormGroup ) => {
        
        let pass1 = group.controls[passField1].value;
        let pass2 = group.controls[passField2].value;
        
        if( pass1 === pass2 ){return null}
        return {notEqualsPasswords : true}
    }
  }

  

}
