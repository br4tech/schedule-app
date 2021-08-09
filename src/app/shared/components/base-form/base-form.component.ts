import { OnInit, Directive } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

@Directive()
export abstract class BaseFormComponent implements OnInit {

  formulario: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  abstract submit() : any

  onSubmit() {
    if (this.formulario.valid) {
      this.submit();
    } else {
      console.log('formulario invalido');
      this.verificaValidacoesForm(this.formulario);
    }
  }

  verificaValidacoesForm(formGroup: FormGroup | FormArray) {
    Object.keys(formGroup.controls).forEach(campo => {
      const controle = formGroup.get(campo);
      controle.markAsDirty();
      controle.markAsTouched();
      if (controle instanceof FormGroup || controle instanceof FormArray) {
        this.verificaValidacoesForm(controle);
      }
    });
  }

  resetar() {
    this.formulario.reset();
  }

  verificaValidTouched(campo: string) {
    return (
      !this.formulario.get(campo).valid &&
      (this.formulario.get(campo).touched || this.formulario.get(campo).dirty)
    );
  }

  verificaRequired(campo: string) {
    return (
      this.formulario.get(campo).hasError('required') &&
      (this.formulario.get(campo).touched || this.formulario.get(campo).dirty)
    );
  }

  applyCssError(campo: string) {
    return {
      'is-invalid': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }

  verificaArrayRequired(campo_pai: string, campo_filho: string, index: number) {
    let controle = this.formulario.get(campo_pai) as FormArray;
    return (
      controle.controls[index].get(campo_filho).hasError('required') &&
      (controle.controls[index].get(campo_filho).touched || 
      controle.controls[index].get(campo_filho).dirty)
    );
  }

  verificaArrayValidTouched(campo_pai: string, campo_filho: string, index: number) {
    let controle = this.formulario.get(campo_pai) as FormArray;
    return (
      !controle.controls[index].get(campo_filho).valid &&
      (controle.controls[index].get(campo_filho).touched || 
      controle.controls[index].get(campo_filho).dirty)
    );
  }

  applyCssErrorToArray(campo_pai: string, campo_filho: string, index: number) {
    return {
      'is-invalid': this.verificaArrayValidTouched(campo_pai, campo_filho, index),
      'has-feedback': this.verificaArrayValidTouched(campo_pai, campo_filho, index)
    };
  }
}