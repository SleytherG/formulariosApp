import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.scss']
})
export class DinamicosComponent {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  persona: Persona = {
    nombre: 'Sleyther',
    favoritos: [
      { id: 1, nombre: 'Metal Gear' },
      { id: 2, nombre: 'DeadStranding' },
      { id: 3, nombre: 'Five Nights at Fredy' },
      { id: 4, nombre: 'Resident Evil 7' },
    ]
  }
  favorito: string = '';


  guardar() {

  }

  get nombreValidator() {
    return this.miFormulario?.controls['nombre']?.errors && this.miFormulario?.controls['nombre']?.touched;
  }

  get favoritoValidator() {
    return this.miFormulario?.controls['favorito']?.errors && this.miFormulario?.controls['favorito']?.touched;
  }

  get favoritoVal() {
    return this.favoritoForm?.errors && this.favoritoForm?.invalid;
  }

  get nombreForm() {
    return this.miFormulario?.controls['nombre'];
  }

  get favoritoForm() {
    return this.miFormulario?.controls['favorito'];
  }

  eliminar( i:number ) {
    this.persona.favoritos.splice(i, 1);
  }

  agregar() {
    console.log('FAVORITO', this.favorito);
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.favoritoForm?.value
    }
    this.persona.favoritos.push({...nuevoFavorito} )
    this.nombreForm?.setValue('');
    // this.favoritoForm?.setValue('');
    this.favoritoForm?.reset();
  }
}
