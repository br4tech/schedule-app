import { Injectable } from '@angular/core';
import {Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import { Observable} from 'rxjs';

import { Client } from 'src/app/shared/models/client';
import { DoctorService } from './doctor.service';

@Injectable()
export class DoctorResolver implements Resolve<Client[]> {

  constructor(private doctorService: DoctorService){}

   resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
      return this.doctorService.getClients();
  }
}
