import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation-without-cotract',
  templateUrl: './reservation-without-cotract.component.html',
  styleUrls: ['./reservation-without-cotract.component.scss']
})
export class ReservationWithoutCotractComponent implements OnInit {
  form: FormGroup;
  person_type: string = "CNPJ";
  getCheckedRadio: string = null;
  PERSON_LIST = [
    { name: 'Pessoa Juridica', value: '0', checked: true,  },
    { name: 'Pessoa Fisica', value: '1', checked: false }
  ]

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {  
    this.PERSON_LIST.forEach(o => {
      if (o.checked)
       this.getCheckedRadio = o.value;
    });
    this.createForm();
  }

  personType(item: number){
    if (item == 0){
      this.person_type ="CNPJ"
    }else{
      this.person_type ="CPF"
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

}
