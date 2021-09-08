import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbDateParserFormatter, NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';
import { SettingsService } from 'src/app/modules/settings/settings.service';
import { CustomDatepickerFormatService } from 'src/app/shared/helpers/custom-datepicker-format.service';
import { CustomDatepickerI18nService, I18n } from 'src/app/shared/helpers/custom-datepicker-i18n.service';
import { Clinic } from 'src/app/shared/models/clinic';
import { Office } from 'src/app/shared/models/office';

@Component({
  selector: 'app-reservation-without-cotract',
  templateUrl: './reservation-without-cotract.component.html',
  styleUrls: ['./reservation-without-cotract.component.scss'],
  providers: [
    { provide: NgbDateParserFormatter, useClass: CustomDatepickerFormatService },
    I18n,{provide: NgbDatepickerI18n, useClass: CustomDatepickerI18nService}
  ]
})
export class ReservationWithoutCotractComponent implements OnInit {
  form: FormGroup;
  person_type: string = "CNPJ";
  mask: string = "00.000.000/0000-00"
  getCheckedRadio: string = null;
  units: Office[];
  offices: Clinic[];
  unit: Office;

  PERSON_LIST = [
    { name: 'Pessoa Juridica', value: '0', checked: true,  },
    { name: 'Pessoa Fisica', value: '1', checked: false }
  ]

  constructor(
    private fb: FormBuilder,
    private settingsService: SettingsService
  ) { }

  ngOnInit(): void { 
    this.createForm(); 
    this.getOffices();
    this.PERSON_LIST.forEach(o => {
      if (o.checked)
       this.getCheckedRadio = o.value;
    });
  }

  personType(item: number){
    if (item == 0){
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
      start_time_at: ['', Validators.required],
      end_time_at: ['', Validators.required]
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
