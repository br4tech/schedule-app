import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Bill } from 'src/app/shared/models/bill';
import { FinancialService } from './financial.service';

@Injectable()
export class FinancialResolverService implements Resolve<Bill[]>{

  constructor(private financialService: FinancialService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
      return this.financialService.getBills();
  }
}
