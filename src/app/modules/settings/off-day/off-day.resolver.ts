import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Holiday } from 'src/app/shared/models/holiday';
import { SettingsService } from '../settings.service';

@Injectable({
  providedIn: 'root'
})
export class OffDayResolver implements Resolve<Holiday[]> {

  constructor(private settingsService: SettingsService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
      return this.settingsService.getHolidays()
  }
}
