import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Reservation } from 'src/app/shared/models/reservation';
import { ScheduleService } from './schedule.service';

@Injectable({
  providedIn: 'root'
})
export class ScheduleResolver implements Resolve<Reservation[]> {

  constructor(private scheduleService: ScheduleService ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
      return this.scheduleService.getReservations();
  }
}
