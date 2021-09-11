import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { SettingsService } from 'src/app/modules/settings/settings.service';
import { Contract } from '../models/contract';

@Injectable({
  providedIn: 'root'
})
export class ContractResolver implements Resolve<Contract[]> {
  
  constructor(private settinService: SettingsService ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
      return this.settinService.getContracts();
  }
}
