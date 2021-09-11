import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Office } from 'src/app/shared/models/office';
import { SettingsService } from '../../modules/settings/settings.service';

@Injectable({
  providedIn: 'root'
})
export class OfficeResolver implements Resolve<Office[]> {

  constructor(private settinService: SettingsService ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
      return this.settinService.getOffices();
  }
}
