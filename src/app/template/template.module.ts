import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

import {TemplateRoutingModule} from "./template-routing.module";
import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { SwitchesComponent } from './switches/switches.component';
import {CustomMinDirective} from "./directives/custom-min.directive";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TemplateRoutingModule,
  ],
  exports: [

  ],
  declarations: [
    BasicosComponent,
    DinamicosComponent,
    SwitchesComponent,
    CustomMinDirective
  ]
})
export class TemplateModule {

}
