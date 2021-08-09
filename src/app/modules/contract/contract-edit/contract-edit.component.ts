import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaseFormComponent } from 'src/app/shared/components/base-form/base-form.component';
import { FormValidations } from 'src/app/shared/validators/form-validator';

@Component({
  selector: 'app-contract-edit',
  templateUrl: './contract-edit.component.html',
  styleUrls: ['./contract-edit.component.scss']
})
export class ContractEditComponent extends BaseFormComponent implements OnInit {

  @ViewChild('ModalCancelAttendanceComponent') openModalAttendance: any;

  formulario: FormGroup;
  person_type: string = "Pessoa Juridica"

  data = {
    name: "",
    email: "",
    person: "",
    document: "",
    cep: "",
    street: "",
    number: "",
    complement: "",
    neighborhood: "",
    city: "",
    state: "",
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
    }],
    attendances:[{
      attendance_kind: "",
      attendance_starts_at: "",
      attendance_ends_at: "",
      attendance_days: "",
      attendance_unit: "",
      attendance_office: "",
      attendance_time_start: "",
      attendance_time_and:""
    }]
  }

  PERSON_LIST = [
    { name: 'Pessoa Juridica', value: '0', checked: true,  },
    { name: 'Pessoa Fisica', value: '1', checked: false }
  ]

  constructor(
    private fb: FormBuilder  
    ) {
      super();
   }

  ngOnInit(): void {
    let getCheckedRadio = null
    this.PERSON_LIST.forEach(o => {
      if (o.checked)
        getCheckedRadio = o.value;
    });

    this.formulario = this.fb.group({
      name: ['',  [Validators.required, Validators.minLength(3), Validators.maxLength(35)]],
      email: ['', [Validators.required, Validators.email]],
      person: [getCheckedRadio, Validators.required],
      document: ['', Validators.required],
      cep: ['', [Validators.required, FormValidations.cepValidator]],
      street: ['', Validators.required],
      number: ['', Validators.required],
      complement: [''],
      neighborhood: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      doctors: this.fb.array([], Validators.required),    
      discounts: this.fb.array([]),
      attendances: this.fb.array([])
    })

    this.setDoctors();
    this.setDiscounts();
    this.setAttendances();
  }   

  submit(){
    // Aqui onde deve passar os dados para o service
  }

  get doctorFormGroups () {
    return this.formulario.get('doctors') as FormArray
  }

  personType(){
    if (this.formulario.controls.person.value == "0"){
      this.person_type ="CNPJ"
    }else{
      this.person_type ="CPF"
    }
  }

  addDoctor(){
    let control = <FormArray>this.formulario.controls.doctors;
    control.push(
      this.fb.group({
        doctor_name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(35)]],
        doctor_document: ['', Validators.required],
        doctor_birthday: ['', Validators.required],
        doctor_crm: ['', Validators.required ],
        doctor_email: ['', [Validators.required, Validators.email]],
        doctor_phone: ['', Validators.required],
        doctor_celphone: [''],
        doctor_speciality: ['', Validators.required]
      })
    )
  }

  deleteDoctor(index: number) {
    let control = <FormArray>this.formulario.controls.doctors;
    control.removeAt(index)
  }

  setDoctors(){
    let control = <FormArray>this.formulario.controls.doctors;

    this.data.doctors.forEach(f => {
      control.push(this.fb.group({
        doctor_name: [f.doctor_name, [Validators.required, Validators.minLength(3), Validators.maxLength(35)]],
        doctor_document: [f.doctor_document, Validators.required],
        doctor_birthday: [f.doctor_birthday, Validators.required],
        doctor_crm: [f.doctor_crm, Validators.required],
        doctor_email: [f.doctor_email, [Validators.required, Validators.email]],
        doctor_phone: [f.doctor_phone, Validators.required],
        doctor_celphone: f.doctor_celphone,
        doctor_speciality: [f.doctor_speciality, Validators.required]
      }))
    })
  }

  get discountFormGroups () {
    return this.formulario.get('discounts') as FormArray
  }

  addDiscount(){
    let control = <FormArray>this.formulario.controls.discounts;
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
    let control = <FormArray>this.formulario.controls.discounts;
    control.removeAt(index)
  }

  setDiscounts(){
    let control = <FormArray>this.formulario.controls.discounts;
    
    this.data.discounts.forEach(f => {
      control.push(this.fb.group({
        discount_amount: f.discount_amount,
        discount_starts_at: f.discount_starts_at,
        discount_ends_at: f.discount_ends_at,
        discount_text: f.discount_text,
      }))
    })
  }

  get attendanceFormGroups () {
    return this.formulario.get('attendances') as FormArray
  }

  addAttendance(){
    let control = <FormArray>this.formulario.controls.attendances;
    control.push(
      this.fb.group({
        attendance_kind: [''],
        attendance_starts_at: [''],
        attendance_ends_at: [''],
        attendance_days: [''],
        attendance_unit: [''],
        attendance_office: [''],
        attendance_time_start: [''],
        attendance_time_and: ['']
      })
    )
  }

  deleteAttendance(index: number){
    let control = <FormArray>this.formulario.controls.attendances;
    control.removeAt(index)
  }

  setAttendances(){
    let control = <FormArray>this.formulario.controls.attendances;

    this.data.attendances.forEach(f =>{
      control.push(this.fb.group({
        attendance_kind: f.attendance_kind,
        attendance_starts_at: f.attendance_starts_at,
        attendance_ends_at: f.attendance_ends_at,
        attendance_days: f.attendance_days,
        attendance_unit: f.attendance_unit,
        attendance_office: f.attendance_office,
        attendance_time_start: f.attendance_time_start,
        attendance_time_and: f.attendance_time_and
      }))
    })
  }

  openModal(){
    this.openModalAttendance.open('')
  }
}
