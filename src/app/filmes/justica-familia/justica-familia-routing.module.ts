import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JusticaFamiliaPage } from './justica-familia.page';

const routes: Routes = [
  {
    path: '',
    component: JusticaFamiliaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JusticaFamiliaPageRoutingModule {}
