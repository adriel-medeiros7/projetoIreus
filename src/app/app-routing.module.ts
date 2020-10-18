import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'software',
    loadChildren: () => import('./software/software.module').then( m => m.SoftwarePageModule)
  },  {
    path: 'hardware',
    loadChildren: () => import('./hardware/hardware.module').then( m => m.HardwarePageModule)
  },
  {
    path: 'listar-hardware',
    loadChildren: () => import('./listar-hardware/listar-hardware.module').then( m => m.ListarHardwarePageModule)
  },
  {
    path: 'listar-software',
    loadChildren: () => import('./listar-software/listar-software.module').then( m => m.ListarSoftwarePageModule)
  },
  {
    path: 'empresa',
    loadChildren: () => import('./empresa/empresa.module').then( m => m.EmpresaPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
