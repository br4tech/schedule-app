import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { SettingsService } from 'src/app/modules/settings/settings.service';
import { Clinic } from 'src/app/shared/models/clinic';
import { Office } from 'src/app/shared/models/office';

@Component({
  selector: 'app-reservation-without-cotract',
  templateUrl: './reservation-without-cotract.component.html',
  styleUrls: ['./reservation-without-cotract.component.scss'],
})
export class ReservationWithoutCotractComponent implements OnInit {
  form: FormGroup;
  person_type: string = "CNPJ";
  mask: string = "00.000.000/0000-00"
  getCheckedRadio: string = null;
  units: Office[];
  offices: Clinic[];
  unit: Office;
  start_time_at: NgbTimeStruct = {hour: 9, minute: 0, second: 0};
  end_time_at: NgbTimeStruct = {hour: 9, minute: 30, second: 0};
  hourStep = 1;
  minuteStep = 30;
  startDate: any;

  PERSON_LIST = [
    { name: 'Pessoa Juridica', value: '0', checked: true,  },
    { name: 'Pessoa Fisica', value: '1', checked: false }
  ]

  constructor(
    private fb: FormBuilder,
    private settingsService: SettingsService
  ) { 
    this.createForm(); 
  }

  ngOnInit(): void {    
    this.getOffices();
    this.PERSON_LIST.forEach(o => {
      if (o.checked)
       this.getCheckedRadio = o.value;
    });
  }

  personType(item: string){
    if (item === '0'){
      this.person_type ="CNPJ"
      this.mask = "00.000.000/0000-00"
    }else{
      this.person_type ="CPF"
      this.mask = "00.000.0000-00"
    }
  }

  createForm(){
   this.form = this.fb.group({
      name: ['',  [Validators.required, Validators.minLength(3), Validators.maxLength(35)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.email]],
      person: [this.getCheckedRadio, Validators.required],
      document: ['', Validators.required],
      unit: ['', [Validators.required]],
      office: ['', Validators.required],
      date_at: ['', Validators.required],
      start_time_at: [this.start_time_at , Validators.required],
      end_time_at: [this.end_time_at, Validators.required]
    })
  }

  getOffices(){
   this.settingsService.getOffices().subscribe((data: any) => {
      this.units = data.offices;    
    });
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
