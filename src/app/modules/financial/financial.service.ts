import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, delay, share } from 'rxjs/operators';

import { Bill } from '../../shared/models/bill';
@Injectable({
  providedIn: 'root'
})

export class FinancialService {

  constructor(private httpClient: HttpClient) { }

  getBills() : Observable<Bill[]>{
    return this.httpClient.get<Bill[]>('api/v1/bills').pipe(share(), delay
    (2000));
  }
}
