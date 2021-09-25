import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { delay, share } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { Bill } from '../../shared/models/bill';
@Injectable({
  providedIn: 'root'
})

export class FinancialService {

  constructor(private httpClient: HttpClient) { }

  getBills() : Observable<Bill[]>{
    return this.httpClient.get<Bill[]>(environment.base_url + '/bills').pipe(share(), delay
    (2000));
  }
}
