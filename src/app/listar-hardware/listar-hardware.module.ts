import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarHardwarePageRoutingModule } from './listar-hardware-routing.module';

import { ListarHardwarePage } from './listar-hardware.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarHardwarePageRoutingModule
  ],
  declarations: [ListarHardwarePage]
})
export class ListarHardwarePageModule {}
