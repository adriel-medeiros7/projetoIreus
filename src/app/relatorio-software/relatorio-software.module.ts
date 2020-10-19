import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RelatorioSoftwarePageRoutingModule } from './relatorio-software-routing.module';

import { RelatorioSoftwarePage } from './relatorio-software.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RelatorioSoftwarePageRoutingModule
  ],
  declarations: [RelatorioSoftwarePage]
})
export class RelatorioSoftwarePageModule {}
