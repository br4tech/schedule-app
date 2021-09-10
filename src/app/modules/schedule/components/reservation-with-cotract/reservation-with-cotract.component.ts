import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SettingsService } from 'src/app/modules/settings/settings.service';

import { Clinic } from 'src/app/shared/models/clinic';
import { Contract } from 'src/app/shared/models/contract';
import { Office } from 'src/app/shared/models/office';

@Component({
  selector: 'app-reservation-with-cotract',
  templateUrl: './reservation-with-cotract.component.html',
  styleUrls: ['./reservation-with-cotract.component.scss']
})
export class ReservationWithCotractComponent implements OnInit {

  units: Office[];
  offices: Clinic[];
  unit: Office;
  contract: Contract;
  contracts: Contract[];

  constructor(
    private fb: FormBuilder,
    private settingsService: SettingsService
  ) { }

  ngOnInit(): void {
    this.getOffices();
    this.getContracts();
  }

  getOffices(){
   this.settingsService.getOffices().subscribe((data: any) => {
      this.units = data.offices;    
    });
  }

  getContracts(){
    this.settingsService.getContracts().subscribe((data: any) => {
      this.contracts = data.contracts
    })
  }

  onChangeUnit(event: any){
     if(event.value !== "00"){       
      let filter = <Office[]>this.units.filter( f => f.id == event.value)  
      this.offices = filter[0].clinics;
     }else{
       this.offices = <Clinic[]> null;
     }
  }

}
