import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarSoftwarePage } from './listar-software.page';

const routes: Routes = [
  {
    path: '',
    component: ListarSoftwarePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarSoftwarePageRoutingModule {}
