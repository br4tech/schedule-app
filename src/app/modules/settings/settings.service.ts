import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, share } from 'rxjs/operators';
import { Contract } from 'src/app/shared/models/contract';

import { Holiday } from 'src/app/shared/models/holiday';
import { Office } from 'src/app/shared/models/office';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private httpClient: HttpClient) { }

  getOffices() : Observable<Office[]>{
    debugger
    return this.httpClient.get<Office[]>(environment.base_url + '/offices').pipe(share(), delay
    (2000));
  }

  getContracts() : Observable<Contract[]>{
    return this.httpClient.get<Contract[]>(environment.base_url + '/contracts').pipe(share(), delay
    (2000));
  }

  getHolidays() : Observable<Holiday[]>{
    return this.httpClient.get<Holiday[]>(environment.base_url + '/holidays').pipe(share(), delay
    (2000));
  }
}
