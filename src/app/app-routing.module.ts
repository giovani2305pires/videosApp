import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'guerra-amanha',
    loadChildren: () => import('./filmes/guerra-amanha/guerra-amanha.module').then( m => m.GuerraAmanhaPageModule)
  },
  {
    path: 'esquadrao-suicida',
    loadChildren: () => import('./filmes/esquadrao-suicida/esquadrao-suicida.module').then( m => m.EsquadraoSuicidaPageModule)
  },
  {
    path: 'jungle-cruise',
    loadChildren: () => import('./filmes/jungle-cruise/jungle-cruise.module').then( m => m.JungleCruisePageModule)
  },
  {
    path: 'justica-familia',
    loadChildren: () => import('./filmes/justica-familia/justica-familia.module').then( m => m.JusticaFamiliaPageModule)
  },
  {
    path: 'infinito',
    loadChildren: () => import('./filmes/infinito/infinito.module').then( m => m.InfinitoPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
