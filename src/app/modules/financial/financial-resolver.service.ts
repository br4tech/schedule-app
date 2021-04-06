import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Payroll } from 'src/app/shared/models/payroll';
import { FinancialService } from './financial.service';

@Injectable()
export class FinancialResolverService implements Resolve<Payroll[]>{

  constructor(private financialService: FinancialService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
      return this.financialService.getPayrolls();
  }
}
