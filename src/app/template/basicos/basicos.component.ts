import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.scss']
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;
  initForm = {
    producto: 'RTX 4080 TI',
    precio: 10,
    existencias: 10
  }

  constructor() { }

  ngOnInit(): void {
  }

  get productoValidator() {
    return this.miFormulario?.controls['producto']?.invalid && this.miFormulario?.controls['producto']?.touched;
  }

  get precioValidator() {
    // return this.miFormulario?.controls['precio']?.invalid && this.miFormulario?.controls['precio']?.touched && this.miFormulario?.controls['precio']?.value > 0;
    return this.miFormulario?.controls['precio']?.touched
          && this.miFormulario?.controls['precio']?.value <= 0;
  }

  // guardar( miFormulario: NgForm) {
  guardar( ) {
    console.log('MI FORMULARIO', this.miFormulario);
    console.log('Submit hecho', this.miFormulario.controls['producto']);
    console.log('POSTEO CORRECTO');
    this.miFormulario.resetForm({
      producto: 'Algo',
      precio: 0,
      existencias: 0
    });
  }
}
