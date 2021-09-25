import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, share } from 'rxjs/operators';
import { Client } from 'src/app/shared/models/client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private httpClient: HttpClient) { }

  getClients() : Observable<Client[]>{
    return this.httpClient.get<Client[]>(environment.base_url + '/clients').pipe(share(), delay
    (2000));
  }
}
