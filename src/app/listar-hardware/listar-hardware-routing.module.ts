import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarHardwarePage } from './listar-hardware.page';

const routes: Routes = [
  {
    path: '',
    component: ListarHardwarePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarHardwarePageRoutingModule {}
