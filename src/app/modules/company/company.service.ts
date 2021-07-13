import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { share, delay } from 'rxjs/operators';
import { Company } from 'src/app/shared/models/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private httpClient: HttpClient) { }

  getCompanies() : Observable<Company[]>{
    return this.httpClient.get<Company[]>('api/v1/companies').pipe(share(), delay
    (2000));
  }
}
