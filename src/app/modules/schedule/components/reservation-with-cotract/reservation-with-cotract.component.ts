import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { SettingsService } from 'src/app/modules/settings/settings.service';
import { BaseModalComponent } from 'src/app/shared/components/modal/base-modal/base-modal.component';
import { ModalContentComponent } from 'src/app/shared/components/modal/modal-content.interface';

import { Clinic } from 'src/app/shared/models/clinic';
import { Contract } from 'src/app/shared/models/contract';
import { Office } from 'src/app/shared/models/office';

@Component({
  selector: 'app-reservation-with-cotract',
  templateUrl: './reservation-with-cotract.component.html',
  styleUrls: ['./reservation-with-cotract.component.scss']
})
export class ReservationWithCotractComponent implements OnInit, ModalContentComponent {
  data: any;
  activeModal: NgbActiveModal;
  form: FormGroup;
  units: Office[];
  offices: Clinic[];
  unit: Office;
  contract: Contract;
  contracts: Contract[];
  start_time_at: NgbTimeStruct = {hour: 9, minute: 0, second: 0};
  end_time_at: NgbTimeStruct = {hour: 9, minute: 30, second: 0};
  hourStep = 1;
  minuteStep = 30;
  startDate: any;

  constructor(
    private fb: FormBuilder,
  ) { 
    this.createForm(); 
  }

  ngOnInit(): void {   
  }

  createForm(){
   this.form = this.fb.group({
      contract: ['',  [Validators.required, Validators.minLength(3), Validators.maxLength(35)]],
      unit: ['', [Validators.required]],
      office: ['', Validators.required],
      date_at: ['', Validators.required],
      start_time_at: [this.start_time_at , Validators.required],
      end_time_at: [this.end_time_at, Validators.required]
    })
  }

  onChangeUnit(event: any){
     if(event.value !== "00"){  
      let offices = <Office[]>this.data.modalInfo.offices;         
      let filter = offices.filter(f => f.id == event.value)  
      this.offices = filter[0].clinics;
     }else{
       this.offices = <Clinic[]> null;
     }
  }

}
