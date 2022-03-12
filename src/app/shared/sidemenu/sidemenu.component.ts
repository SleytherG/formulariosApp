import { Component } from '@angular/core';

interface MenuItem {
  texto: string;
  ruta: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent {
  templateMenu: MenuItem[] = [
    {
      texto: 'Básicos',
      ruta: './template/basicos'
    },
    {
      texto: 'Dinámicos',
      ruta: './template/dinamicos'
    },
    {
      texto: 'Switches',
      ruta: './template/switches'
    },
  ];

  reactiveMenu: MenuItem[] = [
    {
      texto: 'Básicos',
      ruta: './reactive/basicos'
    },
    {
      texto: 'Dinámicos',
      ruta: './reactive/dinamicos'
    },
    {
      texto: 'Switches',
      ruta: './reactive/switches'
    },
  ];

  authMenu: MenuItem[] = [
    {
      texto: 'Registro',
      ruta: './auth/registro'
    },
    {
      texto: 'Login',
      ruta: './auth/login'
    }
  ]

}














// array1 = [
//   {
//     id: 1,
//     nombre: 'Alberto'
//   },
//   {
//     id: 2,
//     nombre: 'Juan'
//   },
//   {
//   id: 3,
//     nombre: 'Maria'
//   },
//   {
//   id: 4,
//     nombre: 'Edgar'
//   }
// ];
// array2 = [
//   {
//     id: 1,
//     nombre: 'Alberto'
//   },
//   {
//     id: 2,
//     nombre: 'Juan'
//   },
//   {
//     id: 3,
//     nombre: 'Maria'
//   },
//   {
//     id: 5,
//     nombre: 'Juana'
//   },
//   {
//     id: 6,
//     nombre: 'Juanito'
//   },
//
// ];

// constructor() {
//   console.log('ARRAY 1', this.array1)
//   console.log('ARRAY 2', this.array2)
//   const mapeado = this.array1.map(resp => resp.id);
//   const filtrado = (this.array2.filter(resp1 => !mapeado.includes(resp1.id)))[0];
//   console.log('FILTRADO', filtrado);
//   const index = this.array2.indexOf(filtrado)
//   console.log('INDEX',index);
//   if ( filtrado ) {
//     this.array1.push(filtrado);
//     this.array2.splice(index, 1);
//     console.log('ARRAY 1 DESPUES 1', this.array1);
//     console.log('ARRAY 2 DESPUES 1', this.array2);
//   }
//   const mapeado1 = this.array2.map(resp => resp.id);
//   const filtrado1 = this.array1.filter(resp1 => !mapeado1.includes(resp1.id));
//   console.log('MAPEADO 1', mapeado1)
//   console.log('FILTRADO 1', filtrado1)
//   const index1 = this.array1.indexOf(filtrado1[0]);
//   // for (let i = 0; i < filtrado1.length; i++) {
//   //       indexes.push(filtrado1[i].id)
//   //   console.log('FILTRADO i', filtrado1[i].id);
//   // }
//   // console.log(indexes)
//   if ( filtrado1 ) {
//     this.array2.push(...filtrado1)
//     this.array1.splice(index1, 1)
//   }
//   console.log('ARRAY 1 DESPUES 2', this.array1);
//   console.log('ARRAY 2 DESPUES 2', this.array2);
//
// }


