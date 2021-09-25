import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { share, delay } from 'rxjs/operators';
import { Company } from 'src/app/shared/models/company';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private httpClient: HttpClient) { }

  getCompanies() : Observable<Company[]>{
    return this.httpClient.get<Company[]>(environment.base_url + '/companies').pipe(share(), delay
    (2000));
  }
}
