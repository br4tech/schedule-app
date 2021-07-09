import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/shared/models/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})

export class UserResolver implements Resolve<User[]> {
  
  constructor(private userService: UserService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
      return this.userService.getUsers();
  }
}
