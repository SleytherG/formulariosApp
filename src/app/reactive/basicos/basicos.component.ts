import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.scss']
})
export class BasicosComponent implements OnInit{

  // miFormulario: FormGroup = new FormGroup({
  //   nombre: new FormControl('RTX 4080ti'),
  //   precio: new FormControl(1500),
  //   existencias: new FormControl(5)
  // })

  miFormulario: FormGroup = this.fb.group({
    nombre: [ '' , [Validators.required, Validators.minLength(3)] ],
    precio: [ null , [Validators.required, Validators.min(1)] ],
    existencias: [ null , [Validators.required, Validators.min(1)]  ]
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.miFormulario.reset({
      nombre: 'RTX 4080Ti',
      precio: 1600,
    })
  }

  get nombreForm() {
    return this.miFormulario.get('nombre');
  }

  get nombreValidator() {
    return this.nombreForm?.hasError('required') && this.nombreForm?.touched;
  }

  get precioForm() {
    return this.miFormulario.get('precio');
  }

  get existenciasForm() {
    return this.miFormulario.get('existencias');
  }

  guardar() {
    if ( this.miFormulario.invalid ) {
      this.miFormulario.markAllAsTouched();
    } else {
      console.log( this.miFormulario.value );
      this.miFormulario.reset();
    }
  }

  campoEsValido ( campo: string ) {
    if (campo === 'precio' || campo === 'existencias') {
        return this.miFormulario.get(campo)?.touched && (this.miFormulario.get(campo)?.hasError('required') || this.miFormulario.get(campo)?.hasError('min'))
    } else {
      return this.miFormulario.get(campo)?.touched && (this.miFormulario.get(campo)?.hasError('required') || this.miFormulario.hasError('minlength'))
    }
  }

}
