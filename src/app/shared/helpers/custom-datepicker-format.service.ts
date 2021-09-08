import { Injectable } from "@angular/core";
import { NgbDateParserFormatter, NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";

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
      let day = date.day > 9 ? date.day : ("0" + date.day).slice(-2)
      let month = date.month > 9 ? date.month : ("0" + date.month).slice(-2)

      return day + this.DELIMITER + month + this.DELIMITER + date.year;
    }else{
      return '00' + this.DELIMITER + '00' + this.DELIMITER + '0000';
    }
  }
}