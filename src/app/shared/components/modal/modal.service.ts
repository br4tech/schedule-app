import { Injectable } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

import { BaseModalComponent } from './base-modal/base-modal.component';
import { ReservationWithCotractComponent } from 'src/app/modules/schedule/components/reservation-with-cotract/reservation-with-cotract.component';
import { ReservationWithoutCotractComponent } from 'src/app/modules/schedule/components/reservation-without-cotract/reservation-without-cotract.component';
import { ModalWithContract } from '../../models/modal-with-contract';
import { Office } from '../../models/office';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modalService: NgbModal) { }

  openReservationWithContract(modal: ModalWithContract){
    const config: NgbModalOptions = {
      size: 'lg',
      backdropClass : 'backgroud-modal'
    }
    
    const modalRef = this.modalService.open(BaseModalComponent, config)
    modalRef.componentInstance.data = { 
      title: "Reserva com contrato", 
      modalInfo: modal,
      component: ReservationWithCotractComponent
    }    

    return modalRef
  }

  openReservationWithOutContract(offices: Office[]){
    const config: NgbModalOptions = {
      size: 'lg',
      backdropClass : 'backgroud-modal'
    }    
  
    const modalRef = this.modalService.open(BaseModalComponent, config)
    modalRef.componentInstance.data = {
       title: "Reserva sem Contrato", 
       offices: offices,
       component: ReservationWithoutCotractComponent  
      } 
     
    return modalRef
  }

  openCanceledAttendance(){

  }
}
