import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-cancel-attendance',
  templateUrl: './modal-cancel-attendance.component.html',
  styleUrls: ['./modal-cancel-attendance.component.scss']
})

export class ModalCancelAttendanceComponent {

  constructor(private modalService: NgbModal) {}

  open() {
    this.modalService.open(ModalCancelAttendanceComponent);
  }
}
