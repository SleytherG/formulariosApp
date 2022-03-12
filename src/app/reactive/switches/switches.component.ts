import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.scss']
})
export class SwitchesComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    genero: [ 'M', [Validators.required] ],
    notificaciones: [ true, [Validators.required] ],
    condiciones: [ false, [Validators.requiredTrue] ]
  });

  persona = {
    genero: 'F',
    notificaciones: true,
  }

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      ...this.persona,
      condiciones: false
    });
    //RXJS
    // this.miFormulario.get('condiciones')?.valueChanges.subscribe( newValue => {
    //   console.log(newValue);
    // })

    // this.miFormulario.valueChanges.subscribe(form => {
    //   delete form.condiciones;
    //   this.persona = form;
    // })
    this.miFormulario.valueChanges.subscribe(({ condiciones, ...restoDeArgumentos}) => {
      // delete condiciones;
      this.persona = restoDeArgumentos;
    })
  }
  guardar() {

    const formValue = {...this.miFormulario.value};
    delete formValue.condiciones;
    console.log(formValue);
    this.persona = formValue;
    // this.persona.condiciones = this.miFormulario.value.condiciones;
  }

}
