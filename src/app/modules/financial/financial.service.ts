import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, delay, share } from 'rxjs/operators';

import { Payroll } from '../../shared/models/payroll';
@Injectable({
  providedIn: 'root'
})

export class FinancialService {

  constructor(private httpClient: HttpClient) { }

  getPayrolls() : Observable<Payroll[]>{
    return this.httpClient.get<Payroll[]>('api/v1/payrolls').pipe(share(), delay
    (2000));
  }
}
