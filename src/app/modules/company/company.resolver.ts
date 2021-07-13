import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { CompanyService } from './company.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyResolver implements Resolve<boolean> {

  constructor(private companyService: CompanyService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
      return this.companyService.getCompanies();
  }
}
