import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-legal-entities',
  templateUrl: './legal-entities.component.html',
  styleUrls: ['./legal-entities.component.scss']
})
export class LegalEntitiesComponent implements OnInit {

  @Input() form: FormGroup;
  person_type: string = "Pessoa Juridica"

  PERSON_LIST = [
    { name: 'Pessoa Juridica', value: '0', checked: true,  },
    { name: 'Pessoa Fisica', value: '1', checked: false }
  ]

  constructor(
    private controlContainer: ControlContainer
  ) { }
  
  ngOnInit(): void { 
    this.form = <FormGroup>this.controlContainer.control;   
    let getCheckedRadio = null

    this.PERSON_LIST.forEach(o => {
      if (o.checked)
        getCheckedRadio = o.value;
    });
  }

  personType(){
    debugger
    if (this.form.get("value")){
      this.person_type ="CNPJ"
    }else{
      this.person_type ="CPF"
    }
  }
}
