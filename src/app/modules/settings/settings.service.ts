import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, share } from 'rxjs/operators';

import { Holiday } from 'src/app/shared/models/holiday';
import { Office } from 'src/app/shared/models/office';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private httpClient: HttpClient) { }

  getOffices() : Observable<Office[]>{
    return this.httpClient.get<Office[]>('api/v1/offices').pipe(share(), delay
    (2000));
  }

  getHolidays() : Observable<Holiday[]>{
    return this.httpClient.get<Holiday[]>('api/v1/holidays').pipe(share(), delay
    (2000));
  }
}
