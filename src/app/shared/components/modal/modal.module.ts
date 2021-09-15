import { CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import { BaseModalComponent } from './base-modal/base-modal.component';
import { InnerContentDirective } from './inner-content.directive';
import { ModalService } from './modal.service';
import { NotificationService } from '../notification/notification.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    BaseModalComponent,
    InnerContentDirective,
  ],
  entryComponents: [
    BaseModalComponent 
  ],
  providers: [
    ModalService,
    NotificationService
    ],
})

export class ModalModule { }
