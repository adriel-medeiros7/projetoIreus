import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarSoftwarePageRoutingModule } from './listar-software-routing.module';

import { ListarSoftwarePage } from './listar-software.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarSoftwarePageRoutingModule
  ],
  declarations: [ListarSoftwarePage]
})
export class ListarSoftwarePageModule {}
