import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {emailPattern, nombreApellidoPattern, noPuedeSerStrider} from "../../../shared/validator/validaciones";
import {ValidatorService} from "../../../shared/validator/validator.service";
import {EmailValidatorService} from "../../../shared/validator/email-validator.service";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['' , [Validators.required, Validators.pattern( this.validatorService.nombreApellidoPattern )]],
    email: ['', [ Validators.required, Validators.pattern( this.validatorService.emailPattern ) ], [ this.emailValidator ]],
    username: ['', [ Validators.required, this.validatorService.noPuedeSerStrider ]],
    password: ['', [ Validators.required, Validators.minLength(6)]],
    password2: ['', [ Validators.required ] ],
  },{
      validators: [ this.validatorService.camposIguales('password','password2') ]
    });

  // emailErrorMsg: string = '';

  // Validar Errores
  get emailErrorMsg(): string {
    const errors = this.miFormulario.get('email');
    if ( errors?.hasError('required') ) {
      return 'El Email es Obligatorio';
    }
    if ( errors?.hasError('pattern') ) {
      return 'El Valor ingresado no tiene formato de correo electronico.';
    }
    if ( errors?.hasError( 'emailTomado' ) ) {
      return 'El email ingresado ya existe.';
    }
    return '';
  }

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorService,
    private emailValidator: EmailValidatorService
  ) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Sleyther Calsin',
      email: 'test1@test.com',
      username: 'SgCp',
      password: '123456',
      password2: '123456'
    })
  }

  campoNoValido( campo: string) {
    return this.miFormulario?.get(campo)?.invalid &&
           this.miFormulario?.get(campo)?.touched
  }

  // emailRequired() {
  //   return this.miFormulario?.get('email')?.hasError('required') &&
  //     this.miFormulario?.get('email')?.touched;
  // }
  //
  // emailFormato() {
  //   return this.miFormulario?.get('email')?.hasError('pattern') &&
  //     this.miFormulario?.get('email')?.touched;
  // }
  //
  // emailExistente() {
  //   return this.miFormulario?.get('email')?.hasError('emailTomado') &&
  //     this.miFormulario?.get('email')?.touched;
  // }

  submitFormulario() {
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }
}
