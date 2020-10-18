import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarEmpresaPageRoutingModule } from './listar-empresa-routing.module';

import { ListarEmpresaPage } from './listar-empresa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarEmpresaPageRoutingModule
  ],
  declarations: [ListarEmpresaPage]
})
export class ListarEmpresaPageModule {}
