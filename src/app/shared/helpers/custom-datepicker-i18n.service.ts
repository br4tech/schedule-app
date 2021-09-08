import { Injectable } from '@angular/core';
import { NgbDatepickerI18n, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

const I18N_VALUES = {
  'pt': {
    weekdays: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
    months: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  }
};

@Injectable()
export class I18n {
  language = 'pt';
}

@Injectable()
export class CustomDatepickerI18nService extends NgbDatepickerI18n {

  constructor() {
    super();
  }

  getWeekdayLabel(weekday: number): string { 
    return I18N_VALUES['pt'].weekdays[weekday - 1]; 
  }

  getWeekdayShortName(weekday: number): string {
    return I18N_VALUES['pt'].weekdays[weekday - 1];
  }
  getMonthShortName(month: number): string {
    return I18N_VALUES['pt'].months[month - 1];
  }
  getMonthFullName(month: number): string {
    return this.getMonthShortName(month);
  }

  getDayAriaLabel(date: NgbDateStruct): string {
    return `${date.day}-${date.month}-${date.year}`;
  }
}
