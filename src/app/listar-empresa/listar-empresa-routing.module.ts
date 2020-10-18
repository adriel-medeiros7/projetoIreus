import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarEmpresaPage } from './listar-empresa.page';

const routes: Routes = [
  {
    path: '',
    component: ListarEmpresaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarEmpresaPageRoutingModule {}
