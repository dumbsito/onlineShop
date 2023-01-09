import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleRoutingModule } from './module-routing.module';
import { InicioComponent } from 'src/app/components/inicio/inicio.component';
import { NavComponent } from '../shared/nav/nav.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModuleRoutingModule,

  ]
})
export class ModuleModule { }
