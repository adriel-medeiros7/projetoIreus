import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RelatorioSoftwarePage } from './relatorio-software.page';

const routes: Routes = [
  {
    path: '',
    component: RelatorioSoftwarePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RelatorioSoftwarePageRoutingModule {}
