import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NotificationBaseComponent } from './notification-base/notification-base.component';
import { NotificationErrorComponent } from './notification-error/notification-error.component';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService) { }

  notificationSucess(){
    this.toastr.success(null, null, {
      toastComponent: NotificationBaseComponent,
      positionClass: 'toast-top-right', 
      timeOut: 3000,
      tapToDismiss: true
    });
  }

  notificationError(){
    this.toastr.error(null, null, {
      toastComponent: NotificationErrorComponent,
      positionClass: 'toast-top-right',
      timeOut: 3000,
      tapToDismiss: true
    });
  }
}
