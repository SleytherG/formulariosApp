import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.scss']
})
export class SwitchesComponent {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  persona = {
    genero: 'F',
    notificaciones: true,
  }

  terminosYCondiciones: boolean = false;


}
