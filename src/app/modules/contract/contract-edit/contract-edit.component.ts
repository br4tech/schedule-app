import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contract-edit',
  templateUrl: './contract-edit.component.html',
  styleUrls: ['./contract-edit.component.scss']
})
export class ContractEditComponent implements OnInit {

  contractForm: FormGroup;

  data = {
    doctors: [{
      doctor_name: "",
      doctor_document: "",
      doctor_birthday: "",
      doctor_crm: "",
      doctor_email: "",
      doctor_phone: "",
      doctor_celphone: "",
      doctor_speciality:  "",
    }],
    discounts: [{
      discount_amount: "",
      discount_starts_at: "",
      discount_ends_at: "",
      discount_text: ""
    }]
  }

  constructor(private fb: FormBuilder) {
    this.contractForm = this.fb.group({
      name: [''],
      email: [''],
      person: [''],
      document: [''],
      cep: [''],
      street: [''],
      number: [''],
      complemen: [''],
      neighborhood: [''],
      city: [''],
      state: [''],
      doctors: this.fb.array([]),
      discounts: this.fb.array([])
    })

    this.setDoctors();
    this.setDiscount();
   }

  ngOnInit(): void {
  }

  get doctorFormGroups () {
    return this.contractForm.get('doctors') as FormArray
  }

  addDoctor(){
    let control = <FormArray>this.contractForm.controls.doctors;
    control.push(
      this.fb.group({
        doctor_name: [''],
        doctor_document: [''],
        doctor_birthday: [''],
        doctor_crm: [''],
        doctor_email: [''],
        doctor_phone: [''],
        doctor_celphone: [''],
        doctor_speciality: ['']
      })
    )
  }

  deleteDoctor(index: number) {
    let control = <FormArray>this.contractForm.controls.doctors;
    control.removeAt(index)
  }

  setDoctors(){
    let control = <FormArray>this.contractForm.controls.doctors;
    this.data.doctors.forEach(f => {
      control.push(this.fb.group({
        doctor_name: f.doctor_name,
        doctor_document:f.doctor_document,
        doctor_birthday: f.doctor_birthday,
        doctor_crm: f.doctor_crm,
        doctor_email: f.doctor_email,
        doctor_phone: f.doctor_phone,
        doctor_celphone: f.doctor_celphone,
        doctor_speciality: f.doctor_speciality
      }))
    })
  }

  get discountFormGroups () {
    return this.contractForm.get('discounts') as FormArray
  }

  addDiscount(){
    let control = <FormArray>this.contractForm.controls.discounts;
    control.push(
      this.fb.group({
        discount_amount: [''],
        discount_starts_at: [''],
        discount_ends_at: [''],
        discount_text: [''],
      })
    )
  }

  deleteDiscount(index: number){
    let control = <FormArray>this.contractForm.controls.discounts;
    control.removeAt(index)
  }

  setDiscount(){
    let control = <FormArray>this.contractForm.controls.discounts;
    
    this.data.discounts.forEach(f => {
      control.push(this.fb.group({
        discount_amount: f.discount_amount,
        discount_starts_at: f.discount_starts_at,
        discount_ends_at: f.discount_ends_at,
        discount_text: f.discount_text,
      }))
    })
  }
}
