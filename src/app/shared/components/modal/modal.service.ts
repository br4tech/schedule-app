import { Injectable } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

import { Contract } from '../../models/contract';
import { BaseModalComponent } from './base-modal/base-modal.component';
import { ReservationWithCotractComponent } from 'src/app/modules/schedule/components/reservation-with-cotract/reservation-with-cotract.component';
import { ReservationWithoutCotractComponent } from 'src/app/modules/schedule/components/reservation-without-cotract/reservation-without-cotract.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modalService: NgbModal) { }

  openReservationWithContract(contract: Contract){
    const config: NgbModalOptions = {
      size: 'lg',
      backdropClass : 'backgroud-modal'
    }
    
    const modalRef = this.modalService.open(BaseModalComponent, config)
    modalRef.componentInstance.data = { title: "Reserva com contrato", component: ReservationWithCotractComponent}    

    return modalRef
  }

  openReservationWithOutContract(){
    const config: NgbModalOptions = {
      size: 'lg',
      backdropClass : 'backgroud-modal'
    }    
  
    const modalRef = this.modalService.open(BaseModalComponent, config)
    modalRef.componentInstance.data = { title: "Reserva sem Contrato", component: ReservationWithoutCotractComponent  } 
     
    return modalRef
  }

  openCanceledAttendance(){

  }
}
