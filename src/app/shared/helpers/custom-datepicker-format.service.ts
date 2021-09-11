import { Injectable } from "@angular/core";
import { NgbCalendar, NgbDateParserFormatter, NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
import { getDay } from "date-fns";

@Injectable()
export class CustomDatepickerFormatService extends NgbDateParserFormatter {

  readonly DELIMITER = '/';

  parse(value: string): NgbDateStruct | null {
    if (value) {
      let date = value.split(this.DELIMITER);
      return {
        day : parseInt(date[0], 10),
        month : parseInt(date[1], 10),
        year : parseInt(date[2], 10)
      };
    }
    return null;
  }

  format(date: NgbDateStruct | null): string {
    if(date){
      let day = this.formatDay(date.day);
      let month = this.formatMoth(date.month);

      return day + this.DELIMITER + month + this.DELIMITER + date.year;
    }else{ 
       
      let year = new Date().getFullYear();
      let day = this.formatDay(new Date().getDate())
      let month = this.formatMoth(new Date().getMonth() + 1)

      return day + this.DELIMITER + month + this.DELIMITER + year;
    }
  }

  formatDay(day: any){
    return day > 9 ? day : ("0" + day).slice(-2)
  }

  formatMoth(month: any){
    return month > 9 ? month : ("0" + month).slice(-2)
  }
}