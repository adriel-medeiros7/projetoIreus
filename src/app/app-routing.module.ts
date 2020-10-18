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
  },
  {
    path: 'hardware',
    loadChildren: () => import('./hardware/hardware.module').then( m => m.HardwarePageModule)
  },
  {
<<<<<<< HEAD
    path: 'relatorio',
    loadChildren: () => import('./relatorio/relatorio.module').then( m => m.RelatorioPageModule)
  },

];
=======
    path: 'listar-hardware',
    loadChildren: () => import('./listar-hardware/listar-hardware.module').then( m => m.ListarHardwarePageModule)
  },
>>>>>>> 7c0e445f156c4a457060d5e6c4860926396b0a92

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
