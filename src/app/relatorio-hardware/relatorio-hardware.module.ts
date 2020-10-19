import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RelatorioHardwarePageRoutingModule } from './relatorio-hardware-routing.module';

import { RelatorioHardwarePage } from './relatorio-hardware.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RelatorioHardwarePageRoutingModule
  ],
  declarations: [RelatorioHardwarePage]
})
export class RelatorioHardwarePageModule {}
