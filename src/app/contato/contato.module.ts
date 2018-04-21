import { NgModule } from '@angular/core';
import {ShareModule} from "../share/share.module";
import {ContatoComponent} from "./contato.component";
import {ContatoRoutingModule} from "./contato-routing.module";

@NgModule({
  imports: [
    ShareModule,
    ContatoRoutingModule
  ],
  declarations: [
    ContatoComponent
  ],
  exports: [
    ContatoComponent
  ]
})
export class ContatoModule { }
