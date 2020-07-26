import { Injectable } from '@angular/core';

declare let $: any;
//import * as moment from 'moment';
//import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class DateUtilService {

  constructor() { }

  parseNgDateToString(dateObj: any) {
    if (dateObj) {
      return dateObj.year + '-' + dateObj.month + '-' + dateObj.day;
    }
    return null;
  }

  parseNgDateToDate(dateObj: any) {
    if (dateObj) {
      let stringDate = dateObj.year + '-' + dateObj.month + '-' + dateObj.day;
      //return moment(stringDate, 'YYYY-MM-DD').toDate();
    }
    return null;
  }

  parseDateToFormatString(date: Date, format: string='DD-MM-YYYY'){
    //return moment(date).format(format);
  }

  parseStringToNgDate(str: string){
    let date = new Date(str);
    return {day: date.getUTCDate(), month: date.getUTCMonth() + 1, year: date.getUTCFullYear()};
  }
    
}
